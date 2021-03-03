import { createAsyncThunk } from '@reduxjs/toolkit';

import { AxiosResponse } from 'axios';

import {
  IStructureDefinition,
  IElementDefinition,
  IElementDefinition_Type as IElementDefinitionType
} from '@ahryman40k/ts-fhir-types/lib/R4';
import {
  FetchedData,
  FetchedIds,
  SimplifiedAttributes,
  TemporaryAttribute
} from 'types';

import api from 'services/api';

import { RootState } from 'state/store';

import { createSimplifiedAttributes, createTemporaryAttribute } from './utils';

export const requestIdsThunk = createAsyncThunk<
  { id: string }[],
  void,
  { state: RootState; rejectValue: Error }
>('resource/requestIdsThunk', async (param, { rejectWithValue }) => {
  const response: AxiosResponse<any> = await api.get(
    `/StructureDefinition?kind=resource&derivation=specialization&_elements=id&_count=150`
  );

  if (response.status === 200) {
    return response.data.entry.map((result: FetchedIds) => result.resource);
  } else {
    return rejectWithValue(new Error(response.statusText));
  }
});

export const requestStructureDefThunk = createAsyncThunk<
  IStructureDefinition,
  string,
  { state: RootState; rejectValue: Error }
>('resource/requestResourceThunk', async (param, { rejectWithValue }) => {
  const response: AxiosResponse<any> = await api.get(
    //`/StructureDefinition?kind=resource&derivation=specialization&name=${param}`
    // keep comments for testing on different kind of resources
    //`/StructureDefinition?id=variant`
    `/StructureDefinition?kind=resource&derivation=specialization&name=Observation`
  );
  if (response.status === 200) {
    return response.data.entry[0].resource;
  } else {
    return rejectWithValue(new Error(response.statusText));
  }
});

export const requestFhirDataTypesThunk = createAsyncThunk<
  {
    primitiveDataTypes: string[];
    complexDataTypes: SimplifiedAttributes[];
    structureDef: SimplifiedAttributes[];
  },
  void,
  { state: RootState; rejectValue: Error }
>('resource/requestFhirDataTypesThunk', async (param, { rejectWithValue }) => {
  const [
    primitiveTypes,
    complexTypes,
    valueSet,
    resourceSDef
  ] = await Promise.all([
    api.get(
      '/StructureDefinition?derivation=specialization&kind=primitive-type&_elements=name'
    ),
    api.get('/StructureDefinition?derivation=specialization&kind=complex-type'),
    api.get('/CodeSystem?_elements=name,concept&_count=508'),
    api.get(
      '/StructureDefinition?kind=resource&derivation=specialization&name=StructureDefinition'
    )
  ]);
  if (
    primitiveTypes.status === 200 &&
    complexTypes.status === 200 &&
    valueSet.status === 200 &&
    resourceSDef.status === 200
  ) {
    const complexTypeTree: SimplifiedAttributes = {
      id: '',
      name: '',
      type: '',
      children: [],
      min: undefined,
      max: '',
      definition: ''
    };
    const structureDefTree: SimplifiedAttributes = {
      id: '',
      name: '',
      type: '',
      children: [],
      min: undefined,
      max: '',
      definition: ''
    };
    const newValueSet = valueSet.data.entry.map(
      (item: FetchedData) => item.resource
    );
    const newComplexTypesFetched: IStructureDefinition[] = complexTypes.data.entry.map(
      (item: FetchedData) => item.resource
    );
    const newStructureDefFetched: IStructureDefinition[] = resourceSDef.data.entry.map(
      (item: FetchedData) => item.resource
    );

    const newComplexTypes: TemporaryAttribute[] = createTemporaryAttribute(
      newComplexTypesFetched,
      newValueSet
    );
    const newSDef: TemporaryAttribute[] = createTemporaryAttribute(
      newStructureDefFetched,
      newValueSet
    );

    if (newComplexTypes && newSDef) {
      newComplexTypes.forEach(
        (type) =>
          type && createSimplifiedAttributes(type, type, complexTypeTree)
      );

      newSDef.forEach(
        (type) =>
          type && createSimplifiedAttributes(type, type, structureDefTree)
      );
    }
    const allPayloads = {
      primitiveDataTypes: primitiveTypes.data.entry.map(
        (result: { resource: { name: string }; search: any }) =>
          result.resource.name
      ),
      complexDataTypes: complexTypeTree.children,
      structureDef: structureDefTree.children[0].children
    };
    return allPayloads;
  } else {
    return rejectWithValue(new Error(primitiveTypes.statusText));
  }
});

export const requestCodeSystemDataTypeThunk = createAsyncThunk<
  string[],
  void,
  { state: RootState; rejectValue: Error }
>(
  'codeSystem/requestCodeSystemDataTypeThunk',
  async (param, { rejectWithValue }) => {
    const response: AxiosResponse<any> = await api.get(
      '/StructureDefinition?derivation=specialization&name=extension'
    );
    const resource: IStructureDefinition = response.data.entry[0].resource;
    let codes: string[] = [];
    resource.differential?.element.forEach((element: IElementDefinition) => {
      if (element.id === 'Extension.value[x]') {
        codes =
          element?.type
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            ?.map((e: IElementDefinitionType) => e.code!)
            .filter(Boolean) || [];
      }
      codes = codes?.filter(Boolean) || [];
    });
    if (response.status === 200) {
      return codes;
    } else {
      return rejectWithValue(new Error(response.statusText));
    }
  }
);

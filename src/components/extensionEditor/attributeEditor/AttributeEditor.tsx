import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'state/store';

import Autocomplete, {
  AutocompleteRenderInputParams
} from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import {
  IStructureDefinition,
  IElementDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';

import { updateStructureDefExtension } from 'state/reducers/resource';

type AttributeEditorProps = {
  structureDefinition: IStructureDefinition;
};

const AttributeEditor: React.FC<AttributeEditorProps> = ({
  structureDefinition
}) => {
  const { datatypes } = useSelector((state: RootState) => {
    return state.codeSystem;
  });
  const dispatch = useAppDispatch();
  const structureDef = { ...structureDefinition };

  const getElementById = (
    id: string,
    type: 'differential' | 'snapshot'
  ): IElementDefinition | undefined => {
    if (structureDef)
      if (type === 'differential')
        for (const obj of structureDef?.differential?.element || []) {
          if (obj && obj.id === id) {
            return obj;
          }
        }
      else if (type === 'snapshot')
        for (const obj of structureDef?.snapshot?.element || []) {
          if (obj && obj.id === id) {
            return obj;
          }
        }
  };

  const extensionElement = getElementById('Extension', 'differential');

  const [short, setShort] = useState(
    extensionElement ? extensionElement.short : ''
  );
  const [definition, setDefinition] = useState(
    extensionElement ? extensionElement.definition : ''
  );
  const [comment, setComment] = useState(
    extensionElement ? extensionElement.comment : ''
  );
  const [minCardinality, setMinCardinality] = useState(
    extensionElement ? extensionElement.min : undefined
  );
  const [maxCardinality, setMaxCardinality] = useState(
    extensionElement ? extensionElement.max : ''
  );
  const [dataType, setDataType] = useState('');

  const handleEditExtension = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let extensionElement = getElementById('Extension', 'differential');
    if (extensionElement) {
      extensionElement.short = short;
      extensionElement.definition = definition;
      extensionElement.comment = comment;
      extensionElement.min = minCardinality;
      extensionElement.max = maxCardinality;
    }

    extensionElement = getElementById('Extension', 'snapshot');
    if (extensionElement) {
      extensionElement.short = short;
      extensionElement.definition = definition;
      extensionElement.comment = comment;
      extensionElement.min = minCardinality;
      extensionElement.max = maxCardinality;
    }

    extensionElement = getElementById('Extension.value[x]', 'snapshot');
    if (extensionElement && extensionElement.type) {
      extensionElement.type[0].code = dataType;
    }

    extensionElement = getElementById('Extension.value[x]', 'differential');
    if (extensionElement && extensionElement.type) {
      extensionElement.type[0].code = dataType;
    }
    dispatch(updateStructureDefExtension(structureDef));
  };

  return (
    <React.Fragment>
      <form onSubmit={handleEditExtension}>
        <TextField
          id="short"
          label="Short"
          defaultValue={short}
          onBlur={(
            event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setShort(event.target.value)}
        />
        <br />
        <TextField
          id="definition"
          label="Definition"
          defaultValue={definition}
          onBlur={(
            event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setDefinition(event.target.value)}
        />
        <br />
        <TextField
          id="comment"
          label="Comment"
          defaultValue={comment}
          onBlur={(
            event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setComment(event.target.value)}
        />
        <br />
        <TextField
          id="minCardinality"
          label="Min"
          defaultValue={minCardinality}
          onBlur={(
            event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setMinCardinality(parseInt(event.target.value))}
        />
        <TextField
          id="maxCardinality"
          label="Max"
          defaultValue={maxCardinality}
          onBlur={(
            event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setMaxCardinality(event.target.value)}
        />
        <br />
        <ul>
          <Autocomplete
            id="Data type"
            options={datatypes ?? []}
            style={{ width: 300 }}
            onChange={(event, value) => {
              value && setDataType(value);
              // TODO : complete structureDefinitionTree with getStructureDef(value as string)
            }}
            renderInput={(
              params: AutocompleteRenderInputParams
            ): React.ReactNode => (
              <TextField {...params} label="Data type" variant="outlined" />
            )}
          />
        </ul>
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  );
};

export default AttributeEditor;

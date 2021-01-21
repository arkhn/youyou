import React from 'react';

import { createElementDefinitionTree } from 'components/profileEditor/utils';
import { isPrimitive } from 'state/utils';
import { SimplifiedAttributes } from 'types';
import AccordionEditor from 'components/profileEditor/editor/complexTypesEditor/accordionEditor/AccordionEditor';
import AddComplexType from 'components/profileEditor/editor/complexTypesEditor/addComplexType/AddComplexType';
import RenderPrimitiveTypes from 'components/profileEditor/editor/complexTypesEditor/renderPrimitiveTypes/RenderPrimitiveTypes';
import RenderComplexType from 'components/profileEditor/editor/complexTypesEditor/RenderComplexType';

type RenderFixedValuesProps = {
  path: string;
  attribute: SimplifiedAttributes;
  handleAdd: (path: string, value: any) => void;
  primitiveTypes: string[];
  currentNodeJSON: any;
  handleDelete: (path: string, i: number | undefined) => void;
  onChangeValue: (path: string, value: any) => void;
  complexTypes: SimplifiedAttributes[];
};

const RenderFixedValues: React.FC<RenderFixedValuesProps> = ({
  path,
  attribute,
  handleAdd,
  handleDelete,
  primitiveTypes,
  onChangeValue,
  currentNodeJSON,
  complexTypes
}) => {
  const isPrimitiveType = isPrimitive(attribute.type, primitiveTypes);
  const isSet = currentNodeJSON[path] === undefined ? false : true;

  if (isPrimitiveType) {
    const value = attribute.type === 'boolean' ? false : '';
    return isSet ? (
      <AccordionEditor
        accordionTitle={`${attribute.name} ${attribute.type}`}
        handleDelete={handleDelete}
        path={path}
        accordionDetails={
          <RenderPrimitiveTypes
            attribute={attribute}
            onChangeValue={onChangeValue}
            currentNodeJSON={currentNodeJSON}
            newPath={path}
          />
        }
      />
    ) : (
      <AddComplexType
        handleAdd={handleAdd}
        complexFhirAttribute={attribute}
        path={path}
        value={value}
      />
    );
  } else {
    const value = createElementDefinitionTree(attribute.children);
    return isSet ? (
      <AccordionEditor
        handleDelete={handleDelete}
        accordionTitle={`${attribute.name} ${attribute.type}`}
        path={path}
        accordionDetails={
          currentNodeJSON[path] && (
            <RenderComplexType
              currentNodeJSON={currentNodeJSON[path]}
              complexTypes={complexTypes}
              complexFhirAttributes={attribute.children}
              primitiveTypes={primitiveTypes}
              onChangeValue={onChangeValue}
              handleDelete={handleDelete}
              handleAdd={handleAdd}
              name={path}
            />
          )
        }
      />
    ) : (
      <AddComplexType
        handleAdd={handleAdd}
        complexFhirAttribute={attribute}
        path={path}
        value={value}
      />
    );
  }
};

export default RenderFixedValues;

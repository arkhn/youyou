import React from 'react';

import { SimplifiedAttributes } from 'types';
import { createJSONTree } from 'components/profileEditor/editor/utils';
import { isPrimitive } from 'state/utils';
import { createElementDefinitionTree } from 'components/profileEditor/utils';

import AddComplexType from './addComplexType/AddComplexType';
import AccordionEditor from './accordionEditor/AccordionEditor';
import DialogChangeSliceName from './dialogSliceName/DialogChangeSliceName';
import RenderPrimitiveTypes from './renderPrimitiveTypes/RenderPrimitiveTypes';
import { changeFixedName } from './renderPrimitiveTypes/utils';

import { useStyles } from 'components/profileEditor/editor/complexTypesEditor/accordionEditor/style';

type DetailProps = {
  complexFhirAttributes: SimplifiedAttributes[];
  complexTypes: SimplifiedAttributes[];
  currentNodeJSON: any;
  primitiveTypes: string[];
  onChangeValue?: (path: string, value: any) => void;
  handleDelete?: (path: string, i: number) => void;
  handleAdd?: (path: string, value: any) => void;
  name: string;
  index?: number;
  onChangeSliceName?: (value: string) => void;
};

const RenderComplexType: React.FC<DetailProps> = ({
  complexFhirAttributes,
  complexTypes,
  currentNodeJSON,
  primitiveTypes,
  onChangeValue,
  handleDelete,
  handleAdd,
  name,
  index
}) => {
  const classes = useStyles();
  let renderSliceName: JSX.Element | null = null;

  const onChange = (
    callback: typeof onChangeValue | typeof handleDelete | typeof handleAdd
  ) => (path: string, value: any) => {
    if (index !== undefined && callback) {
      callback(`${name && name + '.'}${index}.${path}`, value);
    } else if (callback) {
      callback(`${name && name + '.'}${path}`, value);
    }
  };

  const renderAttribute = complexFhirAttributes.map((attribute, index) => {
    let attributeElement: JSX.Element | null = null;
    const newPath = changeFixedName(attribute, attribute.name);
    if (newPath.includes('fixed')) {
      if (isPrimitive(attribute.type, primitiveTypes)) {
        const value = attribute.type === 'boolean' ? false : '';
        if (currentNodeJSON[newPath] === undefined) {
          /**
           * if attribute name includes fixed, attribute type is primitive, and is undefined in structureDefinition,
           * creates an AddComplexType to create it.
           */
          attributeElement = (
            <AddComplexType
              handleAdd={onChange(handleAdd)}
              complexFhirAttribute={attribute}
              path={newPath}
              value={value}
            />
          );
        } else {
          /**
           * if attribute name includes fixed, attribute type is primitive, and is defined in structureDefinition,
           * creates an accordion filled with the fixed value attributes.
           */
          attributeElement = (
            <AccordionEditor
              accordionTitle={`${attribute.name} ${attribute.type}`}
              handleDelete={onChange(handleDelete)}
              path={newPath}
              accordionDetails={
                <RenderPrimitiveTypes
                  attribute={attribute}
                  onChangeValue={onChange(onChangeValue)}
                  currentNodeJSON={currentNodeJSON}
                  newPath={newPath}
                />
              }
            />
          );
        }
      } else if (attribute.type && !Array.isArray(attribute.type)) {
        const value = createElementDefinitionTree(attribute.children);
        if (!currentNodeJSON[newPath]) {
          /**
           * if attribute type is defined, attribute type is complex, is not an array, and is undefined in structureDefinition,
           * creates an AddComplexType to create it.
           */
          attributeElement = (
            <AddComplexType
              handleAdd={onChange(handleAdd)}
              complexFhirAttribute={attribute}
              path={newPath}
              value={value}
            />
          );
        } else {
          /**
           * if attribute name includes fixed, attribute type is primitive, and is defined in structureDefinition,
           * creates an accordion filled with the fixed value attributes.
           */
          attributeElement = (
            <AccordionEditor
              handleDelete={onChange(handleDelete)}
              accordionTitle={`${attribute.name} ${attribute.type}`}
              path={newPath}
              accordionDetails={
                currentNodeJSON[newPath] && (
                  <RenderComplexType
                    currentNodeJSON={currentNodeJSON[newPath]}
                    complexTypes={complexTypes}
                    complexFhirAttributes={attribute.children}
                    primitiveTypes={primitiveTypes}
                    onChangeValue={onChange(onChangeValue)}
                    handleDelete={onChange(handleDelete)}
                    handleAdd={onChange(handleAdd)}
                    name={newPath}
                  />
                )
              }
            />
          );
        }
      }
    } else if (
      attribute.children.length > 0 &&
      newPath !== 'extension' &&
      newPath !== 'snapshot' &&
      newPath !== 'differential'
    ) {
      if (Array.isArray(currentNodeJSON[newPath])) {
        /**
         * render complex types with cardinality max greater than 1
         */
        attributeElement = (
          <div className={classes.accordion}>
            <AddComplexType
              handleAdd={onChange(handleAdd)}
              complexFhirAttribute={attribute}
              path={newPath}
              value={createJSONTree(
                attribute.children,
                currentNodeJSON[newPath]
              )}
            />
            {currentNodeJSON[newPath].map((childNodeJSON: any, i: number) => {
              return (
                <AccordionEditor
                  handleDelete={onChange(handleDelete)}
                  accordionTitle={`${newPath} ${i + 1}`}
                  key={i}
                  index={i}
                  path={newPath}
                  accordionDetails={
                    <RenderComplexType
                      currentNodeJSON={childNodeJSON}
                      complexTypes={complexTypes}
                      complexFhirAttributes={attribute.children}
                      primitiveTypes={primitiveTypes}
                      onChangeValue={onChange(onChangeValue)}
                      handleDelete={onChange(handleDelete)}
                      handleAdd={onChange(handleAdd)}
                      name={newPath}
                      index={i}
                    />
                  }
                />
              );
            })}
          </div>
        );
      } else if (
        typeof currentNodeJSON[newPath] === 'object' &&
        !newPath.includes('fixed')
      ) {
        /**
         * render complex types with cardinality max less than or equal to 1
         */
        attributeElement = (
          <AccordionEditor
            handleDelete={onChange(handleDelete)}
            accordionTitle={
              attribute.min && attribute.min > 0 ? `${newPath}*` : newPath
            }
            accordionDetails={
              <RenderComplexType
                currentNodeJSON={currentNodeJSON[newPath]}
                complexTypes={complexTypes}
                complexFhirAttributes={attribute.children}
                primitiveTypes={primitiveTypes}
                onChangeValue={onChange(onChangeValue)}
                handleDelete={onChange(handleDelete)}
                handleAdd={onChange(handleAdd)}
                name={newPath}
              />
            }
          />
        );
      }
    } else if (newPath === 'sliceName' && currentNodeJSON.sliceName) {
      /**
       * if attribute name is slice name, render a button to edit slice name
       */
      renderSliceName = (
        <DialogChangeSliceName
          sliceName={currentNodeJSON.sliceName}
          id={currentNodeJSON.id}
        />
      );
    } else if (
      newPath !== 'extension' &&
      attribute.children.length === 0 &&
      !Array.isArray(attribute.type)
    ) {
      /**
       * if attribute is primitive, render a different type of input (depending on which primitive type)
       */
      attributeElement = (
        <RenderPrimitiveTypes
          attribute={attribute}
          onChangeValue={onChange(onChangeValue)}
          currentNodeJSON={currentNodeJSON}
          newPath={newPath}
        />
      );
    }
    return <div key={index}>{attributeElement}</div>;
  });

  return (
    <>
      {renderSliceName}
      {renderAttribute}
    </>
  );
};

export default RenderComplexType;

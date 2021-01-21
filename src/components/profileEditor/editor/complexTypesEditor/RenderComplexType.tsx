import React from 'react';

import { SimplifiedAttributes } from 'types';
import { createJSONTree } from 'components/profileEditor/editor/utils';

import AddComplexType from 'components/profileEditor/editor/complexTypesEditor/addComplexType/AddComplexType';
import AccordionEditor from 'components/profileEditor/editor/complexTypesEditor/accordionEditor/AccordionEditor';
import DialogChangeSliceName from 'components/profileEditor/editor/complexTypesEditor//dialogSliceName/DialogChangeSliceName';
import RenderPrimitiveTypes from 'components/profileEditor/editor/complexTypesEditor/renderPrimitiveTypes/RenderPrimitiveTypes';
import { changeFixedName } from 'components/profileEditor/editor/complexTypesEditor/renderPrimitiveTypes/utils';
import RenderFixedValues from 'components/profileEditor/editor/complexTypesEditor/renderFixedValues/RenderFixedValues';

import { useStyles } from 'components/profileEditor/editor/complexTypesEditor/accordionEditor/style';

type DetailProps = {
  complexFhirAttributes: SimplifiedAttributes[];
  complexTypes: SimplifiedAttributes[];
  currentNodeJSON: any;
  primitiveTypes: string[];
  name: string;
  index?: number;
  onChangeValue?: (path: string, value: any) => void;
  handleDelete?: (path: string, i: number) => void;
  handleAdd?: (path: string, value: any) => void;
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
      /**
       * if attribute is a fixed value, render RenderFixedValues
       */
      attributeElement = (
        <RenderFixedValues
          path={newPath}
          attribute={attribute}
          handleAdd={onChange(handleAdd)}
          primitiveTypes={primitiveTypes}
          currentNodeJSON={currentNodeJSON}
          handleDelete={onChange(handleDelete)}
          onChangeValue={onChange(onChangeValue)}
          complexTypes={complexTypes}
        />
      );
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
      } else if (typeof currentNodeJSON[newPath] === 'object') {
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

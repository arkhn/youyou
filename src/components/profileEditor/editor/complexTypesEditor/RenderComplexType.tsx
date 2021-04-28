import React from 'react';

import { SimplifiedAttributes } from 'types';
import { createJSONTree } from 'components/profileEditor/editor/utils';

import AddComplexType from 'components/profileEditor/editor/complexTypesEditor/addComplexType/AddComplexType';
import AccordionEditor from 'components/profileEditor/editor/complexTypesEditor/accordionEditor/AccordionEditor';
import DialogChangeSliceName from 'components/profileEditor/editor/complexTypesEditor/dialogSliceName/DialogChangeSliceName';
import RenderPrimitiveTypes from 'components/profileEditor/editor/complexTypesEditor/renderPrimitiveTypes/RenderPrimitiveTypes';
import { changeFixedName } from 'components/profileEditor/editor/complexTypesEditor/renderPrimitiveTypes/utils';
import RenderFixedValues from 'components/profileEditor/editor/complexTypesEditor/renderFixedValues/RenderFixedValues';

import { useStyles } from 'components/profileEditor/editor/complexTypesEditor/styles';
import { useAppDispatch } from 'state/store';
import { setSnackbarOpen } from 'state/reducers/snackbarReducer';

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
  onChangeCardinality?: (
    firstPath: string,
    secondPath: string,
    firstValue: number,
    secondValue: string
  ) => void;
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
  index,
  onChangeCardinality
}) => {
  let renderSliceName: JSX.Element | null = null;
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const onChange = (
    callback: typeof onChangeValue | typeof handleDelete | typeof handleAdd
  ) => (path: string, value: any) => {
    const max = complexFhirAttributes.find(
      (attribute) => attribute.name === path
    )?.max;

    if (callback && callback.name !== 'handleAdd') {
      index !== undefined
        ? callback(`${name && name + '.'}${index}.${path}`, value)
        : callback(`${name && name + '.'}${path}`, value);
    } else if (
      max &&
      callback &&
      callback.name === 'handleAdd' &&
      Array.isArray(currentNodeJSON[path])
    ) {
      if (Number(max) > currentNodeJSON[path].length || max === '*') {
        index !== undefined
          ? callback(`${name && name + '.'}${index}.${path}`, value)
          : callback(`${name && name + '.'}${path}`, value);
      } else if (Number(max) === currentNodeJSON[path].length) {
        dispatch(
          setSnackbarOpen({
            message: `You can't add more than ${max} ${path}`,
            severity: 'error'
          })
        );
      }
    }
  };

  const handleChangeCadinality = (
    firstPath: string,
    secondPath: string,
    firstValue: number,
    secondValue: string
  ) => {
    if (index !== undefined && onChangeCardinality) {
      onChangeCardinality(
        `${name && name + '.'}${index}.${firstPath}`,
        `${name && name + '.'}${index}.${secondPath}`,
        firstValue,
        secondValue
      );
    } else if (onChangeCardinality) {
      onChangeCardinality(
        `${name && name + '.'}${firstPath}`,
        `${name && name + '.'}${secondPath}`,
        firstValue,
        secondValue
      );
    }
  };

  const renderAttribute = complexFhirAttributes.map((attribute, index) => {
    let attributeElement: JSX.Element | null = null;
    const newPath = changeFixedName(attribute, attribute.name);
    if (newPath.includes('fixed')) {
      attributeElement = (
        <RenderFixedValues
          complexTypes={complexTypes}
          primitiveTypes={primitiveTypes}
        />
      );
    } else if (
      attribute.children.length > 0 &&
      newPath !== 'extension' &&
      newPath !== 'snapshot' &&
      newPath !== 'differential' &&
      newPath !== 'type'
    ) {
      if (Array.isArray(currentNodeJSON[newPath])) {
        /**
         * render complex types with cardinality max greater than 1
         */
        attributeElement = (
          <AddComplexType
            handleAdd={onChange(handleAdd)}
            complexFhirAttribute={attribute}
            path={newPath}
            value={createJSONTree(attribute.children, currentNodeJSON[newPath])}
            className={
              currentNodeJSON[newPath].length > 0
                ? classes.multipleComplexType
                : undefined
            }
          >
            {currentNodeJSON[newPath].map((childNodeJSON: any, i: number) => {
              return (
                <AccordionEditor
                  handleDelete={onChange(handleDelete)}
                  accordionTitle={`${newPath} ${i + 1}`}
                  key={i}
                  index={i}
                  path={newPath}
                  className={
                    i !== currentNodeJSON[newPath].length - 1
                      ? classes.accordionMultiple
                      : undefined
                  }
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
          </AddComplexType>
        );
      } else if (
        typeof currentNodeJSON[newPath] === 'object' &&
        newPath !== 'base'
      ) {
        /**
         * render complex types with cardinality max less than or equal to 1
         */
        attributeElement = (
          <AccordionEditor
            handleDelete={onChange(handleDelete)}
            tool={attribute.definition}
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
          onChangeCardinality={handleChangeCadinality}
        />
      );
    } else if (currentNodeJSON.sliceName) {
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
    return (
      <div key={index} className={classes.attributeElement}>
        {attributeElement}
      </div>
    );
  });

  return (
    <>
      {renderSliceName}
      {renderAttribute}
    </>
  );
};

export default RenderComplexType;

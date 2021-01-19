import React from 'react';

import { RenderAttributesTree } from 'types';
import { createJSONTree } from 'components/profileEditor/editor/utils';
import { isPrimitive } from 'state/utils';
import { createElementDefinitionTree } from 'components/profileEditor/utils';

import AddComplexType from './addComplexType/AddComplexType';
import AccordionEditor from './accordionEditor/AccordionEditor';
import DialogChangeSliceName from './dialogSliceName/DialogChangeSliceName';
import RenderPrimitiveTypes from './renderPrimitiveTypes/RenderPrimitiveTypes';

import { useStyles } from 'components/profileEditor/editor/complexTypesEditor/accordionEditor/style';

type DetailProps = {
  attributes: RenderAttributesTree[];
  complexTypes: RenderAttributesTree[];
  structureDefJSON: any;
  primitiveTypes: string[];
  onChangeValue?: (path: string, value: any) => void;
  handleDelete?: (path: string, i: number) => void;
  handleAdd?: (path: string, value: any) => void;
  name: string;
  index?: number;
  onChangeSliceName?: (value: string) => void;
};

const RenderComplexType: React.FC<DetailProps> = ({
  attributes,
  complexTypes,
  structureDefJSON,
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

  const getNewPath = (item: RenderAttributesTree) => {
    if (item.type && !Array.isArray(item.type)) {
      let newTypeName = item.type;
      const splitedTypeName = newTypeName.split('');
      const firstLetter = newTypeName[0].toUpperCase();
      splitedTypeName.splice(0, 1, firstLetter);
      newTypeName = splitedTypeName.join('');
      const newPath = `${item.name.split('[x]').join('')}${newTypeName}`;
      return newPath;
    }
  };

  const renderAttribute = attributes.map((item, index) => {
    let attributeElement: JSX.Element | null = null;
    if (item.name.includes('fixed')) {
      const newPath = getNewPath(item);
      if (isPrimitive(item.type, primitiveTypes) && newPath) {
        const value = item.type === 'boolean' ? false : '';
        if (structureDefJSON[newPath] === undefined) {
          attributeElement = (
            <AddComplexType
              handleAdd={onChange(handleAdd)}
              item={item}
              newPath={newPath}
              value={value}
            />
          );
        } else {
          attributeElement = (
            <AccordionEditor
              title={`${item.name} ${item.type}`}
              handleDelete={onChange(handleDelete)}
              path={newPath}
              accordionDetails={
                <RenderPrimitiveTypes
                  item={item}
                  onChangeValue={onChangeValue}
                  structureDefJSON={structureDefJSON}
                  onChange={onChange}
                  index={index}
                />
              }
            />
          );
        }
      } else if (item.type && !Array.isArray(item.type) && newPath) {
        const value = createElementDefinitionTree(item.children);
        if (!structureDefJSON[newPath]) {
          attributeElement = (
            <AddComplexType
              handleAdd={onChange(handleAdd)}
              item={item}
              newPath={newPath}
              value={value}
            />
          );
        } else {
          attributeElement = (
            <AccordionEditor
              handleDelete={onChange(handleDelete)}
              title={`${item.name} ${item.type}`}
              path={newPath}
              accordionDetails={
                structureDefJSON[newPath] && (
                  <RenderComplexType
                    structureDefJSON={structureDefJSON[newPath]}
                    complexTypes={complexTypes}
                    attributes={item.children}
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
      item.children.length > 0 &&
      item.name !== 'extension' &&
      item.name !== 'snapshot' &&
      item.name !== 'differential'
    ) {
      if (Array.isArray(structureDefJSON[item.name])) {
        attributeElement = (
          <div className={classes.accordion}>
            <AddComplexType
              handleAdd={onChange(handleAdd)}
              item={item}
              newPath={item.name}
              value={createJSONTree(item.children, structureDefJSON[item.name])}
            />
            {structureDefJSON[item.name].map((element: any, i: number) => {
              return (
                <AccordionEditor
                  handleDelete={onChange(handleDelete)}
                  title={`${item.name} ${i + 1}`}
                  key={i}
                  index={i}
                  path={item.name}
                  accordionDetails={
                    <RenderComplexType
                      structureDefJSON={element}
                      complexTypes={complexTypes}
                      attributes={item.children}
                      primitiveTypes={primitiveTypes}
                      onChangeValue={onChange(onChangeValue)}
                      handleDelete={onChange(handleDelete)}
                      handleAdd={onChange(handleAdd)}
                      name={item.name}
                      index={i}
                    />
                  }
                />
              );
            })}
          </div>
        );
      } else if (
        typeof structureDefJSON[item.name] === 'object' &&
        !item.name.includes('fixed')
      ) {
        attributeElement = (
          <AccordionEditor
            handleDelete={onChange(handleDelete)}
            title={item.min && item.min > 0 ? `${item.name}*` : item.name}
            accordionDetails={
              <RenderComplexType
                structureDefJSON={structureDefJSON[item.name]}
                complexTypes={complexTypes}
                attributes={item.children}
                primitiveTypes={primitiveTypes}
                onChangeValue={onChange(onChangeValue)}
                handleDelete={onChange(handleDelete)}
                handleAdd={onChange(handleAdd)}
                name={item.name}
              />
            }
          />
        );
      }
    } else if (item.name === 'sliceName' && structureDefJSON.sliceName) {
      renderSliceName = (
        <DialogChangeSliceName
          sliceName={structureDefJSON.sliceName}
          id={structureDefJSON.id}
        />
      );
    } else if (
      item.name !== 'extension' &&
      item.children.length === 0 &&
      !Array.isArray(item.type)
    ) {
      attributeElement = (
        <RenderPrimitiveTypes
          item={item}
          onChangeValue={onChangeValue}
          structureDefJSON={structureDefJSON}
          onChange={onChange}
          index={index}
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

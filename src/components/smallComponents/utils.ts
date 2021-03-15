import cloneDeep from 'lodash.clonedeep';
import isEmpty from 'lodash.isempty';

export const cleaningJSON = (structureDefinition: any) => {
  const newSDef = cloneDeep(structureDefinition);
  for (const attribute in newSDef) {
    if (newSDef[attribute] === undefined) {
      delete newSDef[attribute];
    } else if (
      typeof newSDef[attribute] === 'object' &&
      !Array.isArray(newSDef[attribute])
    ) {
      if (isEmpty(newSDef[attribute])) {
        delete newSDef[attribute];
      } else {
        newSDef[attribute] = cleaningJSON(newSDef[attribute]);
      }
    } else if (
      typeof newSDef[attribute] === 'object' &&
      Array.isArray(newSDef[attribute])
    ) {
      if (isEmpty(newSDef[attribute])) {
        delete newSDef[attribute];
      } else {
        const newComplexType: any[] = [];
        newSDef[attribute].forEach((item: any) => {
          const newItem = cleaningJSON(item);
          if (!isEmpty(newItem)) {
            newComplexType.push(newItem);
          }
        });
        newSDef[attribute] = cleaningJSON(newComplexType);
      }
    }
  }
  return newSDef;
};

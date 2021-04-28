import cloneDeep from 'lodash.clonedeep';
import isEmpty from 'lodash.isempty';

export const cleaningJSON = (structureDefinition: any, root: boolean) => {
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
        newSDef[attribute] = cleaningJSON(newSDef[attribute], false);
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
          const newItem = cleaningJSON(item, false);
          if (!isEmpty(newItem)) {
            newComplexType.push(newItem);
          }
        });
        newSDef[attribute] = cleaningJSON(newComplexType, false);
      }
    }
  }

  if (root) {
    delete newSDef.differential;

    const date = new Date(Date.now()).toISOString();
    if (!newSDef.date) {
      newSDef.date = date;
    }
    if (newSDef.meta && !newSDef.meta.lastUpdated) {
      newSDef.meta = {
        ...newSDef.meta,
        lastUpdated: date
      };
    }
    if (newSDef.abstract === undefined) {
      newSDef.abstract = false;
    }
    if (!newSDef.url) {
      newSDef.url = `http://arkhn.com/profile/${newSDef.name}`;
    }
  }

  return newSDef;
};

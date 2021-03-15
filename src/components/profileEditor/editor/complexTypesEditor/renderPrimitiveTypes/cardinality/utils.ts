export const allCardinalities: { min: number; max: string }[] = [
  {
    min: 0,
    max: '0'
  },
  {
    min: 0,
    max: '1'
  },
  {
    min: 0,
    max: '*'
  },
  {
    min: 1,
    max: '1'
  },
  {
    min: 1,
    max: '*'
  }
];

export const isDisabledInput = (
  min: number,
  max: string,
  baseMin: number,
  baseMax: string | undefined
): boolean => {
  if (
    baseMin !== undefined &&
    baseMax !== undefined &&
    min >= baseMin &&
    (baseMax === '*' || (baseMax === '1' && (max === '1' || max === '0')))
  ) {
    return false;
  }
  return true;
};

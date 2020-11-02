/**
 * Defines if an input is disabled depending on the cardinality of the item and of the input
 * @param min min cardinality of the input
 * @param max max cardinality of the input
 * @param baseMin base min cardinality of the item
 * @param baseMax base max cardinality of the item
 */
export const isDisabledInput = (
  min: number,
  max: string,
  baseMin: number,
  baseMax: string | undefined
) => {
  if (
    baseMin !== undefined &&
    baseMax !== undefined &&
    min >= baseMin &&
    (baseMax === "*" || (baseMax === "1" && (max === "1" || max === "0")))
  ) {
    return false;
  }
  return true;
};

export const allCardinalities: { min: number; max: string }[] = [
  {
    min: 0,
    max: "0"
  },
  {
    min: 0,
    max: "1"
  },
  {
    min: 0,
    max: "*"
  },
  {
    min: 1,
    max: "1"
  },
  {
    min: 1,
    max: "*"
  }
];

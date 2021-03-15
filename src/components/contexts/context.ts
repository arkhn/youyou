import { createContext } from 'react';
import { ContextFixedValuesType } from 'types';

export default createContext<
  [
    ContextFixedValuesType | undefined,
    React.Dispatch<React.SetStateAction<ContextFixedValuesType>> | undefined
  ]
>([undefined, undefined]);

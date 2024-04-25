import { createContext } from 'react';

interface ContextProps {
    ancho: number;
    alto: number;
    setSizes: (ancho: number, alto: number) => void;
}

export const ChampionsContext = createContext({} as ContextProps);
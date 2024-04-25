import { FC, PropsWithChildren, useReducer } from 'react';
import { ChampionsContext, ChampionsReducer } from './';

export interface ChampionsState {
    ancho: number;
    alto: number;
}


const Champions_INITIAL_STATE: ChampionsState = {
    ancho: 728,
    alto: 208,
}


export const ChampionsProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(ChampionsReducer, Champions_INITIAL_STATE);

    const setSizes = (ancho: number, alto: number) => {
        dispatch({
            type: 'SetScreenSize',
            payload: { ancho, alto }
        });
    }

    return (
        <ChampionsContext.Provider value={{
            ...state,
            setSizes,
        }}>
            {children}
        </ChampionsContext.Provider>
    )
};
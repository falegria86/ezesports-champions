import { ChampionsState } from './';

interface ScreenSizesProps {
    ancho: number;
    alto: number;
}

type ChampionsActionType =
    | { type: 'SetScreenSize'; payload: ScreenSizesProps }


export const ChampionsReducer = (state: ChampionsState, action: ChampionsActionType): ChampionsState => {

    switch (action.type) {
        case 'SetScreenSize':
            return {
                ...state,
                alto: action.payload.alto,
                ancho: action.payload.ancho,
            }

        default:
            return state;
    }
}
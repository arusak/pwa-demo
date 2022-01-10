import { initialState, reducer, State } from './state.reducer';
import { ReactNode, useReducer, createContext } from 'react';
import { Action } from './state.actions';

export const StateContext = createContext<
    [State, (action: Action) => void]
>([initialState, () => {}]);

export const StateProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    );
};

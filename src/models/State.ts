import { types } from 'mobx-state-tree';
export enum State {
    Pending = 'Pending',
    Success = 'Success',
    Failure = 'Failure',
}
export const StateModel = types.enumeration('State', Object.values(State));

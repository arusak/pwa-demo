import { Task } from '../models/Task';
import { Action } from './state.actions';

export type State = {
    tasks: Task[];
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'LoadTasks':
            return {
                ...state,
                tasks: [...action.value],
            };

        case 'UpdateTask': {
            const taskIdx = state.tasks.findIndex(t => t._id === action.task._id);
            if (!taskIdx) {
                return state;
            }
            const tasks = state.tasks;
            tasks[taskIdx] = { ...action.task };
            return {
                ...state,
                tasks: [...tasks],
            };
        }

        default:
            return state;
    }
};

export const initialState: State = {
    tasks: [],
};

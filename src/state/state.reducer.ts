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

        case 'AddPhoto': {
            const task = state.tasks.find(t => t.id === action.taskId);
            if (!task) {
                return state;
            }
            task.photos = [...task.photos || [], action.photo];
            return {
                ...state,
                tasks: [...state.tasks],
            };
        }

        case 'RemovePhoto': {
            const task = state.tasks.find(t => t.id === action.taskId);
            if (!task) {
                return state;
            }
            task.photos.splice(action.index, 1);
            return {
                ...state,
                tasks: [...state.tasks],
            };
        }

        default:
            return state;
    }
};

export const initialState: State = {
    tasks: [],
};

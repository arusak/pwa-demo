import { Task } from '../models/Task';
import { Action, ResetTaskAction } from './state.actions';

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

        case 'CompleteStep': {
            const task = state.tasks.find(t => t.id === action.taskId);
            if (!task) {
                return state;
            }
            if (task.workEnd) {
                return state;
            } else if (task.workStart) {
                task.workEnd = new Date().toISOString();
            } else if (task.travelEnd) {
                task.workStart = new Date().toISOString();
            } else if (task.travelStart) {
                task.travelEnd = new Date().toISOString();
            } else {
                task.travelStart = new Date().toISOString();
            }
            return {
                ...state,
                tasks: [...state.tasks],
            };
        }

        case 'ResetTask': {
            const task = state.tasks.find(t => t.id === action.taskId);
            if (!task) {
                return state;
            }

            task.workEnd = undefined;
            task.workStart = undefined;
            task.travelEnd = undefined;
            task.travelStart = undefined;

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

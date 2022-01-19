import {Instance, types} from 'mobx-state-tree';
import { TasksList } from './TasksList';

const RootStore = types
    .model('RootStore', {
        tasksList: types.optional(TasksList, {})
    })
    .actions((self) => ({
        initApplication(): void {
            self.tasksList.init();
        }
    }));

export interface IRootStore extends Instance<typeof RootStore> {}

export {RootStore};

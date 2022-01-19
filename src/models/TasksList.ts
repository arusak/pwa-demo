import { types, Instance, flow } from 'mobx-state-tree';
import { Task, ITaskModel } from './Task';
import { fetchTasks } from '../services/data.service';
import { StateModel, State } from './State';
import { RawTask } from './RawTask';

const TasksList = types
    .model('TasksList', {
        tasks: types.optional(types.array(Task), []),
        state: types.optional(StateModel, State.Pending),
    })
    .actions((self) => ({
        load: flow(function* () {
            self.state = State.Pending;
            try {
                const result: RawTask[] = yield fetchTasks();
                const tasks = result.map(raw => Task.create({ ...raw, id: raw._id }));
                self.tasks.replace(tasks);
                self.state = State.Success;
            } catch (e) {
                self.state = State.Failure;
            }
        }),
        update(updated: ITaskModel) {
            const index = self.tasks.findIndex(t => t.id === updated.id);
            const tasks = self.tasks;
            tasks[index] = updated;
            self.tasks.replace(tasks);
        },
        init() {
            this.load();
        },
    }))
    .views(() => ({}),
    );

export interface ITasksListModel extends Instance<typeof TasksList> {
}

export { TasksList };

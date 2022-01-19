import { types, Instance } from 'mobx-state-tree';

const Task = types
    .model('Task', {
        id: types.identifier,
        description: types.string,
        location: types.string,
        travelStart: types.maybe(types.string),
        travelEnd: types.maybe(types.string),
        workStart: types.maybe(types.string),
        workEnd: types.maybe(types.string),
        photos: types.optional(types.array(types.string), []),
    })
    .actions((self) => ({
        addPhoto(dataUrl: string) {
            self.photos.push(dataUrl);
        },
        removePhoto(index: number) {
            self.photos.splice(index, 1);
        },
        resetTime() {
            self.travelStart = undefined;
            self.travelEnd = undefined;
            self.workStart = undefined;
            self.workEnd = undefined;
        },
        step() {
            if (self.workEnd) {
            } else if (self.workStart) {
                self.workEnd = new Date().toISOString();
            } else if (self.travelEnd) {
                self.workStart = new Date().toISOString();
            } else if (self.travelStart) {
                self.travelEnd = new Date().toISOString();
            } else {
                self.travelStart = new Date().toISOString();
            }
        }
    }))
    .views(() => ({}),
    );

export interface ITaskModel extends Instance<typeof Task> {
}

export { Task };

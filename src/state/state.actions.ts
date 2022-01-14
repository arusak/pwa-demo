import { Task } from '../models/Task';

export class LoadTasksAction {
    readonly type = 'LoadTasks';

    constructor(readonly value: Task[]) {
    }
}

export class UpdateTaskAction {
    readonly type = 'UpdateTask';

    constructor(readonly task: Task) {
    }
}

export class AddPhotoAction {
    readonly type = 'AddPhoto';

    constructor(readonly taskId: string, readonly photo: string) {
    }
}

export class RemovePhotoAction {
    readonly type = 'RemovePhoto';

    constructor(readonly taskId: string, readonly index: number) {
    }
}

export class CompleteStepAction {
    readonly type = 'CompleteStep';

    constructor(readonly taskId: string) {
    }
}

export class ResetTaskAction {
    readonly type = 'ResetTask';

    constructor(readonly taskId: string) {
    }
}

export type Action = LoadTasksAction | AddPhotoAction | RemovePhotoAction | CompleteStepAction | ResetTaskAction | UpdateTaskAction;
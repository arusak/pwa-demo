import { FC, useContext, useEffect } from 'react';

import s from './TasksScene.module.css';
import TasksList from '../../components/TasksList/TasksList';
import { StateContext } from '../../state/state.context';
import { Task } from '../../models/Task';
import { LoadTasksAction, UpdateTaskAction } from '../../state/state.actions';
import { fetchTasks, updateTask } from '../../services/data.service';

interface IProps {
}

const TasksScene: FC<IProps> = () => {
    const [{ tasks }, dispatch] = useContext(StateContext);

    useEffect(() => {
        fetchTasks().then(tasks => dispatch(new LoadTasksAction(tasks)));
    }, [dispatch]);

    const savePhoto = (task: Task, dataUrl: string) => {
        const photos = task.photos || [];
        const updated = { ...task, photos: [...photos, dataUrl] };
        updateTask(updated);
        dispatch(new UpdateTaskAction(updated));

    };

    const removePhoto = (task: Task, index: number) => {
        const photos = [...task.photos];
        const updated = { ...task, photos: photos.splice(index, 1) };
        updateTask(updated);
        dispatch(new UpdateTaskAction(updated));
    };

    const stepTask = (task: Task) => {
        const updated = {
            ...task,
        };
        if (updated.workEnd) {
        } else if (updated.workStart) {
            updated.workEnd = new Date().toISOString();
        } else if (updated.travelEnd) {
            updated.workStart = new Date().toISOString();
        } else if (updated.travelStart) {
            updated.travelEnd = new Date().toISOString();
        } else {
            updated.travelStart = new Date().toISOString();
        }
        updateTask(updated);
        dispatch(new UpdateTaskAction(updated));
    };

    const resetTask = (task: Task) => {
        const updated = {
            ...task,
            workEnd: undefined,
            workStart: undefined,
            travelEnd: undefined,
            travelStart: undefined,
        };
        updateTask(updated);
        dispatch(new UpdateTaskAction(updated));
    };

    return (<div className={s.wrapper}>
            <TasksList tasks={tasks}
                       onPhotoRemove={removePhoto}
                       onPhotoAdd={savePhoto}
                       onCompleteStep={stepTask}
                       onTaskReset={resetTask}
            />
        </div>
    );
};

export default (TasksScene);

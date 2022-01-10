import React, { FC, useContext, useEffect } from 'react';

import s from './TasksScene.module.css';
import TasksList from '../../components/TasksList/TasksList';
import { StateContext } from '../../state/state.context';
import { Task } from '../../models/Task';
import {
    LoadTasksAction,
    AddPhotoAction,
    RemovePhotoAction,
    CompleteStepAction,
    ResetTaskAction,
} from '../../state/state.actions';

interface IProps {
}

const TasksScene: FC<IProps> = () => {
    const [{ tasks }, dispatch] = useContext(StateContext);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.npoint.io/3f4c4bcb193491b0b146');
            const tasks: Task[] = await response.json();
            dispatch(new LoadTasksAction(tasks));
        }

        fetchData();
    }, [dispatch]);

    const savePhoto = (taskId: string, dataUrl: string) => {
        dispatch(new AddPhotoAction(taskId, dataUrl));
    };

    return (<div className={s.wrapper}>
            <TasksList tasks={tasks}
                       onPhotoRemove={(taskId, index) => dispatch(new RemovePhotoAction(taskId, index))}
                       onPhotoAdd={savePhoto}
                       onCompleteStep={(taskId) => dispatch(new CompleteStepAction(taskId))}
                       onTaskReset={(taskId) => dispatch(new ResetTaskAction(taskId))}
            />
        </div>
    );
};

export default (TasksScene);

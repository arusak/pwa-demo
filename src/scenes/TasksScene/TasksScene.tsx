import React, { FC, useContext, useEffect } from 'react';

import s from './TasksScene.module.css';
import TasksList from '../../components/TasksList/TasksList';
import TakePhoto from '../../components/TakePhoto/TakePhoto';
import { StateContext } from '../../state/state.context';
import { Task } from '../../models/Task';
import { LoadTasksAction, AddPhotoAction, RemovePhotoAction } from '../../state/state.actions';

interface IProps {
}

const TasksScene: FC<IProps> = ({}) => {
    const [{ tasks }, dispatch] = useContext(StateContext);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.npoint.io/3f4c4bcb193491b0b146');
            const tasks: Task[] = await response.json();
            dispatch(new LoadTasksAction(tasks));
        }

        fetchData();
    }, [dispatch]);

    const savePhoto = (dataUrl: string) => {
        dispatch(new AddPhotoAction('one', dataUrl));
    };

    return (<div className={s.wrapper}>
            <TasksList tasks={tasks} onPhotoRemove={(taskId, index) => dispatch(new RemovePhotoAction(taskId, index))}/>
            <TakePhoto onPhoto={savePhoto}/>
        </div>
    );
};

export default (TasksScene);

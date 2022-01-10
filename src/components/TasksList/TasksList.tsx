import React, { FC, useState } from 'react';
import cn from 'classnames';

import s from './TasksList.module.css';
import { Task } from '../../models/Task';
import TaskCard from '../TaskCard/TaskCard';
import TakePhoto from '../TakePhoto/TakePhoto';

interface IProps {
    className?: string;
    tasks: Task[];
    onPhotoAdd: (taskId: string, data: string) => void;
    onPhotoRemove: (taskId: string, index: number) => void;
    onCompleteStep: (taskId: string) => void;
    onTaskReset: (taskId: string) => void;
}

const TasksList: FC<IProps> = ({ className, onPhotoRemove, tasks, onCompleteStep, onPhotoAdd, onTaskReset }) => {
    const [photoTaskId, setPhotoTaskId] = useState<string | null>(null);

    return (
        <div className={cn(s.wrapper, className)}>
            <ul>
                {tasks.map(task => <li>
                    <TaskCard task={task}
                              onPhotoRemove={index => onPhotoRemove(task.id, index)}
                              onPhotoAddStart={() => setPhotoTaskId(task.id)}
                              onCompleteStep={() => onCompleteStep(task.id)}
                              onReset={() => onTaskReset(task.id)}/>
                </li>)}
            </ul>
            {photoTaskId && <TakePhoto onCancel={() => setPhotoTaskId(null)} onPhoto={(data) => {
                onPhotoAdd(photoTaskId, data);
                setPhotoTaskId(null);
            }}/>}
        </div>
    );
};

export default (TasksList);

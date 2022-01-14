import { FC, useState } from 'react';
import cn from 'classnames';

import s from './TasksList.module.css';
import { Task } from '../../models/Task';
import TaskCard from '../TaskCard/TaskCard';
import TakePhoto from '../TakePhoto/TakePhoto';

interface IProps {
    className?: string;
    tasks: Task[];
    onPhotoAdd: (task: Task, data: string) => void;
    onPhotoRemove: (task: Task, index: number) => void;
    onCompleteStep: (task: Task) => void;
    onTaskReset: (task: Task) => void;
}

const TasksList: FC<IProps> = ({ className, onPhotoRemove, tasks, onCompleteStep, onPhotoAdd, onTaskReset }) => {
    const [photoTask, setPhotoTask] = useState<Task | null>(null);

    return (
        <div className={cn(s.wrapper, className)}>
            <ul>
                {tasks.map(task =>
                    <li key={task._id}>
                        <TaskCard
                            task={task}
                            onPhotoRemove={index => onPhotoRemove(task, index)}
                            onPhotoCaptureStart={() => setPhotoTask(task)}
                            onImageAdded={data => onPhotoAdd(task, data)}
                            onCompleteStep={() => onCompleteStep(task)}
                            onReset={() => onTaskReset(task)}/>
                    </li>,
                )}
            </ul>
            {photoTask && <TakePhoto onCancel={() => setPhotoTask(null)} onPhoto={(data) => {
                onPhotoAdd(photoTask, data);
                setPhotoTask(null);
            }}/>}
        </div>
    );
};

export default (TasksList);

import { FC } from 'react';
import cn from 'classnames';

import s from './TasksList.module.css';
import { Task } from '../../models/Task';
import TaskCard from '../TaskCard/TaskCard';

interface IProps {
    className?: string;
    tasks: Task[];
    onPhotoRemove: (taskId: string, index: number) => void;
    onCompleteStep: (taskId: string) => void;
}

const TasksList: FC<IProps> = ({ className, onPhotoRemove, tasks, onCompleteStep }) => {
    return (
        <div className={cn(s.wrapper, className)}>
            <ul>
                {tasks.map(task => <li>
                    <TaskCard task={task}
                              onPhotoRemove={index => onPhotoRemove(task.id, index)}
                              onCompleteStep={() => onCompleteStep(task.id)}/>
                </li>)}
            </ul>
        </div>
    );
};

export default (TasksList);

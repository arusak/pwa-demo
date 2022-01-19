import { FC, useState } from 'react';
import cn from 'classnames';

import s from './TasksList.module.css';
import TaskCard from '../TaskCard/TaskCard';
import TakePhoto from '../TakePhoto/TakePhoto';
import { ITaskModel } from '../../models/Task';

interface IProps {
    className?: string;
    tasks: ITaskModel[];
}

const TasksList: FC<IProps> = ({ className, tasks }) => {
    const [photoTask, setPhotoTask] = useState<ITaskModel | null>(null);

    return (
        <div className={cn(s.wrapper, className)}>
            <ul>
                {tasks.map(task =>
                    <li key={task.id}>
                        <TaskCard task={task} onPhotoCaptureStart={() => setPhotoTask(task)}/>
                    </li>,
                )}
            </ul>
            {photoTask && <TakePhoto onCancel={() => setPhotoTask(null)} onPhoto={(data) => {
                photoTask.addPhoto(data);
                setPhotoTask(null);
            }}/>}
        </div>
    );
};

export default (TasksList);

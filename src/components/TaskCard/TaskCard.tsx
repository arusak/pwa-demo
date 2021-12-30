import { FC, memo } from 'react';
import cn from 'classnames';

import s from './TaskCard.module.css';
import { Task } from '../../models/Task';

interface IProps {
    className?: string;
    task: Task;
    onPhotoRemove: (idx: number) => void;
}

const TaskCard: FC<IProps> = ({ className, task, onPhotoRemove }) => {
    return (
        <div className={cn(s.wrapper, className)}>
            <p><b>{task.location}</b></p>
            <p>{task.description}</p>
            <ul>
                <li><b>Travel started</b> <span>{task.travelStart}</span></li>
                <li><b>Travel finished</b> <span>{task.travelEnd}</span></li>
                <li><b>Work started</b> <span>{task.workStart}</span></li>
                <li><b>Work finished</b> <span>{task.workEnd}</span></li>
            </ul>
            {task.photos &&
            <div>
                {task.photos.map((photo, idx) =>
                    <div className={s.photo} onClick={() => onPhotoRemove(idx)}>
                        <img width={100} src={photo}/>
                        <span className={s.remove}>×</span>
                    </div>,
                )}
            </div>
            }
        </div>
    );
};

export default memo(TaskCard);

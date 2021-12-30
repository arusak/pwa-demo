import { FC, memo } from 'react';
import cn from 'classnames';

import s from './TaskCard.module.css';
import { Task } from '../../models/Task';
import { formatTime } from '../../utils/date.utils';

interface IProps {
    className?: string;
    task: Task;
    onPhotoRemove: (idx: number) => void;
    onCompleteStep: () => void;
}

const TaskCard: FC<IProps> = ({ className, task, onPhotoRemove, onCompleteStep }) => {
    return (
        <div className={cn(s.wrapper, className)}>
            <header>
                <p><b>{task.location}</b></p>
                <p>{task.description}</p>
            </header>
            <div className={s.tasks}>
                <ul>
                    <li className={cn(s.milestone, task.travelStart && s.complete)}>
                        <b>Travel started </b>
                        <span>{formatTime(task.travelStart)}</span>
                    </li>
                    <li className={cn(s.milestone, task.travelEnd && s.complete)}>
                        <b>Travel finished </b>
                        <span>{formatTime(task.travelEnd)}</span>
                    </li>
                    <li className={cn(s.milestone, task.workStart && s.complete)}>
                        <b>Work started </b>
                        <span>{formatTime(task.workStart)}</span>
                    </li>
                    <li className={cn(s.milestone, task.workEnd && s.complete)}>
                        <b>Work finished </b>
                        <span>{formatTime(task.workEnd)}</span>
                    </li>
                </ul>
                <div className={s.button}>
                    <button className={s.completeButton} onClick={onCompleteStep} disabled={!!task.workEnd} />
                </div>
            </div>
            {task.photos &&
                <div className={s.photos}>
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

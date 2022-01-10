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
    onReset: () => void;
    onPhotoAddStart: () => void;
}

const TaskCard: FC<IProps> = ({ className, task, onPhotoRemove, onCompleteStep, onPhotoAddStart, onReset }) => {
    return (
        <div className={cn(s.wrapper, className)}>
            <header>
                <div><b>{task.location}</b></div>
                <div>{task.description}</div>
            </header>
            <div className={s.milestones}>
                <ul>
                    <li className={cn(s.milestone, task.travelStart && s.complete)}>
                        <b>Travel started </b>
                        <span>{formatTime(task.travelStart)}</span>
                    </li>
                    {task.travelStart && <li className={cn(s.milestone, task.travelEnd && s.complete)}>
                      <b>Travel finished </b>
                      <span>{formatTime(task.travelEnd)}</span>
                    </li>}
                    {task.travelEnd &&
                    <li className={cn(s.milestone, task.workStart && s.complete)}>
                      <b>Work started </b>
                      <span>{formatTime(task.workStart)}</span>
                    </li>
                    }
                    {task.workStart &&
                    <li className={cn(s.milestone, task.workEnd && s.complete)}>
                      <b>Work finished </b>
                      <span>{formatTime(task.workEnd)}</span>
                    </li>
                    }
                </ul>
                <div className={s.buttons}>
                    <button className={s.completeButton} onClick={onCompleteStep} disabled={!!task.workEnd}>▶</button>
                    <button className={s.resetButton} onClick={onReset}>Reset</button>
                </div>
            </div>
            <div className={s.photos}>
                {task.photos && task.photos.map((photo, idx) =>
                    <div key={idx} className={s.photo} onClick={() => onPhotoRemove(idx)}>
                        <img alt="" src={photo}/>
                        <span className={s.remove}>×</span>
                    </div>,
                )}
                <div className={s.addPhoto} onClick={onPhotoAddStart}>
                    📷
                </div>
            </div>
        </div>
    );
};

export default memo(TaskCard);

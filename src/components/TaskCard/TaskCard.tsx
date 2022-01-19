import { FC, ChangeEvent } from 'react';
import cn from 'classnames';

import s from './TaskCard.module.css';
import { formatTime } from '../../utils/date.utils';
import { getWebpDataUrl, getImageFromFile } from '../../utils/image.utils';
import { ITaskModel } from '../../models/Task';
import { observer } from 'mobx-react-lite';

interface IProps {
    className?: string;
    task: ITaskModel;
    onPhotoCaptureStart: () => void;
}

const TaskCard: FC<IProps> = (props) => {
    const {
        className,
        task,
        onPhotoCaptureStart,
    } = props;

    const handleFile = async (evt: ChangeEvent<HTMLInputElement>) => {
        const file = evt.target.files && evt.target.files[0];
        if (file) {
            const image = await getImageFromFile(file);
            const dataUrl = getWebpDataUrl(image);
            task.addPhoto(dataUrl);
        }
    };
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
                    <button className={s.completeButton} onClick={()=>task.step()} disabled={!!task.workEnd}>▶</button>
                    <button className={s.resetButton} onClick={()=>task.resetTime()}>Reset</button>
                </div>
            </div>
            <div className={s.photos}>
                {task.photos && task.photos.map((photo, idx) =>
                    <div key={idx} className={s.photo} onClick={() => task.removePhoto(idx)}>
                        <img alt="" src={photo}/>
                        <span className={s.remove}>×</span>
                    </div>,
                )}
            </div>
            <div className={s.photoButtons}>
                <div className={s.addPhoto} onClick={onPhotoCaptureStart}>
                    📹
                </div>
                <label className={s.addPhoto}>
                    📷
                    <input className="visually-hidden" type="file" accept="image/*" capture="environment"
                           onChange={handleFile}/>
                </label>
                <label className={s.addPhoto}>
                    📎
                    <input className="visually-hidden" type="file" accept="image/*"
                           onChange={handleFile}/>
                </label>
            </div>
        </div>
    );
};

export default observer(TaskCard);

import { FC, memo, useEffect, useState } from 'react';
import cn from 'classnames';

import s from './TasksList.module.css';

type Task = {
    'description': string;
    'location': string;
    'travelStart'?: string;
    'travelEnd'?: string;
    'workStart'?: string;
    'workEnd'?: string;
    'photo'?: string;
}

interface IProps {
    className?: string;
}

const TasksList: FC<IProps> = ({ className }) => {
    const [data, setData] = useState<Task[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.npoint.io/3f4c4bcb193491b0b146');
            const json = await response.json();
            setData(json);
        }

        fetchData();
    }, []);

    return (
        <div className={cn(s.wrapper, className)}>
            <ul>
                {data.map(task => <li>
                    <p><b>{task.location}</b></p>
                    <p>{task.description}</p>
                    <ul>
                        <li><b>Travel started</b><span>{task.travelStart}</span></li>
                        <li><b>Travel finished</b><span>{task.travelEnd}</span></li>
                        <li><b>Work started</b><span>{task.workStart}</span></li>
                        <li><b>Work finished</b><span>{task.workEnd}</span></li>
                    </ul>
                </li>)}
            </ul>
        </div>
    );
};

export default (TasksList);

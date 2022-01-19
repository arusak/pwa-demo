import { FC } from 'react';

import s from './TasksScene.module.css';
import TasksList from '../../components/TasksList/TasksList';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../models/useStore';

interface IProps {
}

const TasksScene: FC<IProps> = () => {
    const { tasksList } = useStore();

    return (<div className={s.wrapper}>
            <TasksList tasks={tasksList.tasks}/>
        </div>
    );
};

export default observer(TasksScene);

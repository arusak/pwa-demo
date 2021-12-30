import React from 'react';
import s from './App.module.css';
import { StateProvider } from './state/state.context';
import TasksScene from './scenes/TasksScene/TasksScene';

const App = () => {
    return (
        <div className={s.wrapper}>
            <StateProvider>
                <TasksScene/>
            </StateProvider>
        </div>
    );
};

export default App;

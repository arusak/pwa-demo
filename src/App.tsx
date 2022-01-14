import React from 'react';
import s from './App.module.css';
import { StateProvider } from './state/state.context';
import TasksScene from './scenes/TasksScene/TasksScene';

const version = process.env.REACT_APP_VERSION;

const App = () => {
    return (
        <div className={s.wrapper}>
            <StateProvider>
                <TasksScene/>
            </StateProvider>
            {version && <footer className={s.footer}>version {version}</footer>}
        </div>
    );
};

export default App;

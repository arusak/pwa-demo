import React from 'react';
import './App.css';
import { StateProvider } from './state/state.context';
import TasksScene from './scenes/TasksScene/TasksScene';

const App = () => {
    return (
        <div className="App">
            <StateProvider>
                <TasksScene/>
            </StateProvider>
        </div>
    );
};

export default App;

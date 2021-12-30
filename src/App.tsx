import React from 'react';
import './App.css';
import TasksList from './components/TasksList/TasksList';
import TakePhoto from './components/TakePhoto/TakePhoto';

const App = () => {
    const savePhoto = (dataUrl: string) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${(new Date()).toISOString()}.webp`;
        link.innerHTML = 'Click here to download the file';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="App">
            <TasksList/>
            <TakePhoto onPhoto={savePhoto}/>
        </div>
    );
};

export default App;

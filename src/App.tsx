import React, { useState } from 'react';
import s from './App.module.css';
import { StateProvider } from './state/state.context';
import TasksScene from './scenes/TasksScene/TasksScene';
import { useEventListener } from './hooks/useEventListener';

const version = process.env.REACT_APP_VERSION;

const App = () => {
    const [beforeInstallEvent, setBeforeInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
    const [isAccepted, setAccepted] = useState(true);

    useEventListener('beforeinstallprompt', (evt: BeforeInstallPromptEvent) => {
        evt.preventDefault();
        setBeforeInstallEvent(evt);
    });

    const handleAdd = (evt: BeforeInstallPromptEvent) => () => {
        evt.prompt();
        // Wait for the user to respond to the prompt
        evt.userChoice.then((choiceResult) => {
            setAccepted(choiceResult.outcome === 'accepted');
            setTimeout(() => setAccepted(false), 5000);
            setBeforeInstallEvent(null);

        });
    };

    return (
        <div className={s.wrapper}>
            {beforeInstallEvent &&
            <button className={s.addToHome} onClick={handleAdd(beforeInstallEvent)}>Add to Home</button>
            }
            {isAccepted && <div className={s.accepted}>Added to Home Screen</div>}
            <StateProvider>
                <TasksScene/>
            </StateProvider>
            {version && <footer className={s.footer}>version {version}</footer>}
        </div>
    );
};

export default App;

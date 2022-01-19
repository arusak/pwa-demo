import React, { useState, useEffect } from 'react';
import s from './App.module.css';
import TasksScene from './scenes/TasksScene/TasksScene';
import { useEventListener } from './hooks/useEventListener';
import { RootStoreProvider } from './models/useStore';
import { IRootStore, RootStore } from './models/RootStore';
import { ErrorBoundary } from './components/Error/ErrorBoundary';

const version = process.env.REACT_APP_VERSION;


const App = () => {
    const [beforeInstallEvent, setBeforeInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
    const [isAccepted, setAccepted] = useState(false);

    const [rootStore, setRootStore] = useState<IRootStore | undefined>(undefined);

    useEffect(() => {
        const store = RootStore.create();
        setRootStore(store);
        store.initApplication();
    }, []);

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

    if (!rootStore) {
        return null;
    }

    return (
        <ErrorBoundary catchErrors={'always'}>
            <div className={s.wrapper}>
                {beforeInstallEvent &&
                <button className={s.addToHome} onClick={handleAdd(beforeInstallEvent)}>Add to Home</button>
                }
                {isAccepted && <div className={s.accepted}>Added to Home Screen</div>}
                <RootStoreProvider value={rootStore}>
                    <TasksScene/>
                </RootStoreProvider>

                {version && <footer className={s.footer}>version {version} UA {navigator.userAgent}</footer>}
            </div>
        </ErrorBoundary>
    );
};

export default App;

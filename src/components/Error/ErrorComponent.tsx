import { ErrorInfo } from 'react';
import s from './ErrorComponent.module.css';

export interface ErrorComponentProps {
    error: Error;
    errorInfo: ErrorInfo | null;

    onReset(): void;
}

/**
 * Describe your component here
 */
export const ErrorComponent = ({ error, errorInfo, onReset }: ErrorComponentProps) => {
    return (
        <div className={s.wrapper}>
            <div>Bad things happened</div>
            <div>{error.message}</div>
            <div>{errorInfo?.componentStack}</div>
            <div>
                <button onClick={onReset}>Ok</button>
            </div>
        </div>
    );
};

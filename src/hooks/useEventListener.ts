import { useRef, useEffect, EventHandler } from 'react';

export const useEventListener = (eventName: string, handler: EventHandler<any>, element: Element | Window = window) => {
    const handlerRef = useRef<EventHandler<any>>();

    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler
    // without us needing to pass it in effect deps array
    // and potentially cause effect to re-run every render.
    useEffect(() => {
        handlerRef.current = handler;
    }, [handler]);

    useEffect(
        () => {
            if (!handlerRef.current) {
                return;
            }
            const handler = handlerRef.current;
            const eventListener = (event: Event) => handler(event);
            element.addEventListener(eventName, eventListener);

            return () => {
                element.removeEventListener(eventName, eventListener);
            };
        },
        [eventName, element],
    );
};

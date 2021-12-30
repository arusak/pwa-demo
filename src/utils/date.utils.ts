export const formatTime = (str?: string): string => {
    if (!str) {
        return '';
    }
    try {
        const date = new Date(str);
        return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
    } catch (e) {
        return '';
    }
};

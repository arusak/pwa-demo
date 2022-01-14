const maxWidth = 800;
const maxHeight = 800;

export const getImageFromFile = (source: File): Promise<HTMLImageElement> => {
    const reader = new FileReader();
    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
        reader.addEventListener('load', evt => {
            if (evt.target?.readyState === FileReader.DONE) {
                const image = new Image();
                image.addEventListener('load', () => resolve(image));
                image.src = evt.target.result as string;
            } else {
                reject('File could not be loaded');
            }
        });
    });
    reader.readAsDataURL(source);
    return promise;
};

export const getWebpDataUrl = (source: HTMLImageElement | HTMLVideoElement): string => {
    const sourceWidth = source instanceof HTMLVideoElement ? source.videoWidth : source.width;
    const sourceHeight = source instanceof HTMLVideoElement ? source.videoHeight : source.height;
    const scaleDownFactor = Math.max(sourceHeight / maxHeight, sourceWidth / maxWidth, 1);
    const outputWidth = sourceWidth / scaleDownFactor;
    const outputHeight = sourceHeight / scaleDownFactor;

    const canvas = document.createElement('canvas');
    canvas.height = outputHeight;
    canvas.width = outputWidth;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        throw new Error('Unable to create context');
    }

    ctx.drawImage(source, 0, 0, outputWidth, outputHeight);

    return canvas.toDataURL('image/webp', 0.8);
};

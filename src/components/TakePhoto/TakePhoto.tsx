import { FC, useRef, useState, useEffect, useCallback } from 'react';
import cn from 'classnames';

import s from './TakePhoto.module.css';

interface IProps {
    className?: string;
    onPhoto: (dataUrl: string) => void;
}

const TakePhoto: FC<IProps> = ({ onPhoto }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [stream, setStream] = useState<MediaStream | null>(null);
    const [ready, setReady] = useState<boolean>(false);

    const initStream = useCallback(async () => {
        if (videoRef.current) {
            videoRef.current.addEventListener('loadedmetadata', () => {
                console.log('video ready');
                setReady(true);
            });
            videoRef.current.addEventListener('ended', () => {
                console.log('stream ended');
                setStream(null);
                setReady(false);
            });
            const s = await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    facingMode: 'environment',
                },
            });
            console.log('setting stream');
            setStream(s);
            videoRef.current.srcObject = s;
        }
    }, []);

    const takePhoto = () => {
        const video = videoRef.current;
        if (!video) {
            return;
        }
        const videoCanvas = document.createElement('canvas');
        const scaleDownFactor = 2;
        videoCanvas.height = video.videoHeight / scaleDownFactor;
        videoCanvas.width = video.videoWidth / scaleDownFactor;
        const videoContext = videoCanvas.getContext('2d');

        if (!videoContext) {
            return;
        }
        videoContext.drawImage(video, 0, 0, video.videoWidth / scaleDownFactor, video.videoHeight / scaleDownFactor);

        const dataUrl = videoCanvas.toDataURL('image/webp', 0.8);
        onPhoto(dataUrl);
    };

    useEffect(() => {
        if (!stream) {
            initStream();
        }
        return () => {
            stream && stream.getTracks().forEach(function (track) {
                track.stop();
            });
        };
    }, [stream]);

    return (
        <div className={cn(s.wrapper)}>
            <video ref={videoRef} autoPlay muted playsInline/>
            <button onClick={takePhoto} disabled={!ready}>Take photo!</button>
        </div>
    );
};

export default (TakePhoto);

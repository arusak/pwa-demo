import { FC, useRef, useState, useEffect, useCallback } from 'react';
import cn from 'classnames';

import s from './TakePhoto.module.css';
import { getWebpDataUrl } from '../../utils/image.utils';

interface IProps {
    className?: string;
    onPhoto: (dataUrl: string) => void;
    onCancel: () => void;
}

const TakePhoto: FC<IProps> = ({ onPhoto, onCancel }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [stream, setStream] = useState<MediaStream | null>(null);
    const [isVideoReady, setReady] = useState<boolean>(false);
    const [capabilities, setCapabilities] = useState<MediaTrackCapabilities | undefined>(undefined);

    const initStream = useCallback(async () => {
        if (videoRef.current) {
            videoRef.current.addEventListener('loadedmetadata', () => {
                console.log('video ready');
                const capabilities = stream?.getVideoTracks()[0].getCapabilities();
                setCapabilities(capabilities);
                setReady(true);
            });
            videoRef.current.addEventListener('loadeddata', () => {
                videoRef.current && videoRef.current.play();
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
    }, [stream]);

    const takePhoto = () => {
        const video = videoRef.current;
        if (!video) {
            return;
        }
        onPhoto(getWebpDataUrl(video));
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!stream) {
            initStream();
        }
        return () => {
            video && video.pause();
            stream && stream.getTracks().forEach(function (track) {
                track.stop();
            });
        };
    }, [initStream, stream]);

    const handleTorchClick = useCallback((isTorchOn) => {
        const tracks = stream?.getVideoTracks();
        const videoTrack = tracks && tracks[0];
        if (videoTrack && isVideoReady) {
            // @ts-ignore
            if (capabilities.torch) {
                videoTrack.applyConstraints({
                    // @ts-ignore
                    advanced: [{ torch: isTorchOn }],
                }).then(() => {
                    console.log((`torch is ${isTorchOn ? 'on' : 'off'}`));
                });
            }
        }
    }, [capabilities?.torch, isVideoReady, stream]);

    return (
        <div className={cn(s.wrapper)}>
            <video className={s.video} ref={videoRef} muted playsInline/>
            <div className={s.buttons}>
                <button className={s.backButton} onClick={onCancel}>Back</button>
                <button className={s.takePhotoButton} onClick={takePhoto} disabled={!isVideoReady}>Take photo!</button>
                <button className={s.torchButton} onClick={() => handleTorchClick(true)}
                        disabled={!isVideoReady}>Flash
                </button>
            </div>
            <div style={{ fontSize: '10px' }}>
                {JSON.stringify(capabilities)}
            </div>
        </div>
    );
};

export default (TakePhoto);

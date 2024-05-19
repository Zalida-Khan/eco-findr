import React, { useState, useEffect } from "react";
import styles from "./MusicSwitch.module.css";

const useAudio = url => {
    const [audio, setAudio] = useState();
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setAudio(new Audio(url))
        }
    }, []);

    useEffect(() => {
        if (audio !== undefined) {
            playing ? audio.play() : audio.pause();
        }
    }, [playing]);

    useEffect(() => {
        if (audio === undefined) {
            return;
        }
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audio]);

    return [playing, toggle];
};

const MusicPlayer = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div className={styles.audioContainer}>
            <audio className={styles.audio} controls autoPlay={playing} controlsList="nodownload noplaybackrate">
                <source src="/backgroundmusic.mp3" />
            </audio>
        </div>
    );
};

export default MusicPlayer;

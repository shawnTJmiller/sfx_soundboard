import React, { useState, useEffect } from 'react';

const DrumPad = ({ sound, activeKey, keyboard }) => {
    const [audio, setAudio] = useState(new Audio ( sound ));
    const [activeClass, setAciveClass] = useState('');
    const play = () => {
        audio.currentTime = 0;
        audio.play();
    }

    useEffect(() => {
        if (activeKey === keyboard) {
            play();
            setAciveClass('active');
        } else {
            setAciveClass('');
        }
    }, [activeKey]);

    return (
        <div className={`"drum-pad" ${activeClass}`} onMouseDown={play}>
            <h1>{keyboard}</h1>
            <p></p>
        </div>
    );
};

export default DrumPad;
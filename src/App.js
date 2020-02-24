import React, { useEffect, useState } from 'react';
import './App.css';
import DrumPadRow from './components/DrumPadRow';


const App = () => {

    const [activeKey, setActiveKey] = useState();
    const onKeyDown = (e) => {
        setActiveKey(e.key);
    };
    const onKeyUp = () => setActiveKey();

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('keyup', onKeyUp);
        }
    });

    const row1 = [
        { sound: 'sounds/boom.wav', keyboard: 'a' },
        { sound: 'sounds/clap.wav', keyboard: 's' },
        { sound: 'sounds/hihat.wav', keyboard: 'd' }
    ];
    const row2 = [
        { sound: 'sounds/kick.wav', keyboard: 'f' },
        { sound: 'sounds/openhat.wav', keyboard: 'j' },
        { sound: 'sounds/ride.wav', keyboard: 'k' }
    ];
    const row3 = [
        { sound: 'sounds/snare.wav', keyboard: 'l' },
        { sound: 'sounds/tink.wav', keyboard: ';' },
        { sound: 'sounds/tom.wav', keyboard: ' ' }
    ];

    return (
    <div className="App">
            <DrumPadRow rowData={row1} activeKey={activeKey} />
            <DrumPadRow rowData={row2} activeKey={activeKey} />
            <DrumPadRow rowData={row3} activeKey={activeKey} />
    </div>
  );
}

export default App;

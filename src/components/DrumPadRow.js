import React from 'react';
import DrumPad from './DrumPad';

const DrumPadRow = ({ rowData, activeKey }) => (
    <div className="drum-pad-row">
        {rowData.map(data => (
            <DrumPad
                sound={data.sound}
                key={data.sound}
                keyboard={data.keyboard}
                activeKey={activeKey} />        
))};
    </div>
);

export default DrumPadRow;

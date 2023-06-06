import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    const {steps} = props;
    console.log(steps)
    return (
        <div style={{border: '2px solid purple', margin: '20px', borderRadius: '20px'}}>
            <h3>This is Dial component</h3>
            <p>Your steps count: {steps}</p> 
            <Knob steps={steps}></Knob>
        </div>
    );
};

export default Dial;
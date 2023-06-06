import React, { useState } from 'react';

const Battery = () => {
    const [power, setPower] = useState(0)
    const increasePower = () => setPower(power + 10);
    const decreasePower = () => setPower(power - 10);
    // eslint-disable-next-line no-lone-blocks
    {power < 0 && setPower(0)}
    // eslint-disable-next-line no-lone-blocks
    {power > 100 && setPower(100)}

    return (
        <div>
             <h1>Power:{power}</h1>
             <button onClick={increasePower}>Increase Power</button>
             <button onClick={decreasePower}>Decrease Power</button>
        </div>
    );
};

export default Battery;
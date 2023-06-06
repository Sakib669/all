import React from 'react';

const DeviceDetails = (props) => {
    let {price} = props;
    // price = 1;
    return (
        <div>
            <p>It's price is: ${price}</p>
        </div>
    );
};

export default DeviceDetails;
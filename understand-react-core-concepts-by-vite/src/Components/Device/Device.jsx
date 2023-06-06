import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    console.log(props);
    const {price, name} = props;
    return (
        <div>
            <p>I have a device {name}</p>
            <DeviceDetails price={price}></DeviceDetails>
        </div>
    );
};

export default Device;
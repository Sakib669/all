import React, { useState } from 'react';
import Intro from '../Intro/Intro';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Order = () => {


    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <div className='grid grid-cols-2 gap-10'>
                <Intro></Intro>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
        </div>
    );
};

export default Order;
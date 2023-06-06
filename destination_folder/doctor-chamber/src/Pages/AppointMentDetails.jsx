/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const AppointMentDetails = ({ booking, handleDelete, handleUpdateConfirm }) => {
    const { img, title, price, name, date, _id, status } = booking;
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-lg w-24 h-24">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>{date}</td>
            <th>
            {
                    status === 'paid' ?
                    <span className="font-bold text-primary">Paid</span>
                    :
                    <button onClick={() => handleUpdateConfirm(_id)} className="btn  btn-sm">Please Pay</button>}
            </th>
        </tr>
    );
};

export default AppointMentDetails;
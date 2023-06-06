/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import AppointMentDetails from './AppointMentDetails';

const AppointMents = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/bookings/?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setBookings(data);
        })
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`,
        {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            const remaining = bookings.filter(b => b._id !== id);
            setBookings(remaining);
        })
    }

    const handleUpdateConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'paid'}),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(b => b._id !== id);
                const updatedBooking = bookings.find(b => b._id === id);
                updatedBooking.status = 'paid';
                const newBookings = [updatedBooking, ...remaining];
                setBookings(newBookings);
            }
        })
    }

    return (
        <div>
            <p>this is my appointments</p>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                            <th>Preview Image</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <AppointMentDetails
                            key={booking._id}
                            booking={booking}
                            handleUpdateConfirm={handleUpdateConfirm}
                            handleDelete={handleDelete}></AppointMentDetails>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AppointMents;
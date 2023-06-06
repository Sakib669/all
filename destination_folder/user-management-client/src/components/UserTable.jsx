/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserTable = ({ user, users, setUsers }) => {
    const { _id, email, gender, name, status } = user;


    const handleDelete = id => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/user/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = users.filter(user => user._id !== id);
                            setUsers(remaining);
                        }
                    })
            }
        })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{status}</td>
            <td className='flex justify-around'>
                <Link to={`/user/update-user/${_id}`}>
                    <button className="btn">Update</button>
                </Link>
                <button className="btn" onClick={() => handleDelete(_id)}>X</button>
            </td>
        </tr>
    );
};

export default UserTable;
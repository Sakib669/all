import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUser = () => {
    const [gender, setGender] = useState('male');
    const [status, setStatus] = useState('active');
    const para = useParams();
    console.log(para.id)

    const handleCreateUser = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const newUser = { name, email, gender, status };
        console.log(newUser);

        fetch(`http://localhost:5000/user/update-user/${para.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'User Updated Successfully',
                        icon: 'success',
                        showCancelButton: true,
                    })
                }
            })

    }

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    }
    return (
        <div>
            <div className='w-1/4 mx-auto text-center'>
                <h3 className='font-bold text-2xl'>Update User</h3>
                <p className='text-slate-300'>Use the below form to create new account</p>
            </div>
            <form onSubmit={handleCreateUser} >
                <div className="px-14 bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400">Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-slate-400">Email</span>
                                    </label>
                                    <input type="email" placeholder="Enter your password" name='email' className="input input-bordered" />
                                </div>
                                <div className="flex items-center w-1/4 items-center">
                                    <p className="text-slate-400">Gender:</p>
                                    <label className="inline-flex items-center mr-4">
                                        <input type="radio" className="form-radio" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
                                        <span className="ml-2">Male</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
                                        <span className="ml-2">Female</span>
                                    </label>
                                </div>
                                <div className="flex items-center w-1/4 items-center">
                                    <p className="text-slate-400">Status:</p>
                                    <label className="inline-flex items-center mr-4">
                                        <input type="radio" className="form-radio" name="status" value="active" checked={status === 'active'} onChange={handleStatusChange} />
                                        <span className="ml-2">Active</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="status" value="inactive" checked={status === 'inactive'} onChange={handleStatusChange} />
                                        <span className="ml-2">Inactive</span>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-success">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import UserTable from './UserTable';

const Home = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    console.log(users);

    return (
        <div>
            <Link to='/create-user'><button className='btn btn-primary'>Add A User</button></Link>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>{' '}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(user => <UserTable
                            key={user._id}
                            user={user}
                            users={users}
                            setUsers={setUsers}></UserTable>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
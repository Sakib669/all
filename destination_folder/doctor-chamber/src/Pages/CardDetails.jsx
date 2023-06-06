/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const CardDetails = () => {
    const cardData = useLoaderData();
    const { img, title, price, _id } = cardData;

    const {user} = useContext(AuthContext);

    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const due = form.due.value;
        const name = form.name.value;
        console.log(name, email, date, due);
        const data = {
            name, email, date, due, img, title, price, 
        }

        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert('Service Addded successfully!');
            }
        })

    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto ">
                <div className="grid grid-cols-2 gap-10">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            defaultValue={user?.displayName}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="date" className="block mb-2 font-bold text-gray-700">
                            Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="due" className="block mb-2 font-bold text-gray-700">
                            Due
                        </label>
                        <input
                            type="text"
                            name="due"
                            id="due"
                            defaultValue={price}
                            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <input
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700"
                    value='Submit'
                >
                </input>
            </form>
        </div>
    );
};

export default CardDetails;
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();


const Blog = () => {

    return (
        <div className='p-5'>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className="btn btn-secondary my-10" onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref} > 
                <div className='mb-5 border border-yellow-400 rounded-lg p-4'>
                    <h3 className='font-bold text-2xl'>Tell us the differences between uncontrolled and controlled components.</h3>
                    <p>
                        <span className='underline text-indigo-600 me-3'>Ans:</span>
                        In controlled components, the parent component is responsible for managing the state and passing it down as props to the controlled component,
                        On the other hand, uncontrolled components manage their own state using a ref to access the DOM element's current value and update the state accordingly
                    </p>
                </div>
                <div className='mb-5 border border-yellow-400 rounded-lg p-4'>
                    <h3 className='font-bold text-2xl'>How to validate React props using PropTypes</h3>
                    <p>
                        <span className='underline text-indigo-600 me-3'>Ans:</span>
                        <br />
                        Step 1: first of all we need to install prop-types Library by npm i prop-types
                        <br />
                        Step 2: then we need to write the following  codes...
                        <img src="https://i0.wp.com/monkelite.com/wp-content/uploads/2020/06/carbon.png?fit=836%2C555&ssl=1" alt="" />
                    </p>
                </div>
                <div className='mb-5 border border-yellow-400 rounded-lg p-4'>
                    <h3 className='font-bold text-2xl'>Tell us the difference between nodejs and express js.</h3>
                    <p>
                        <span className='underline text-indigo-600 me-3'>Ans:</span><br />
                        Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.
                        <br />
                        Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.
                    </p>
                </div>
                <div className='mb-5 border border-yellow-400 rounded-lg p-4'>
                    <h3 className='font-bold text-2xl'>What is a custom hook, and why will you create a custom hook?</h3>
                    <p>
                        <span className='underline text-indigo-600 me-3'>Ans:</span>
                        Custom hooks in ReactJS are reuseable functions that can use to add special and unique functionality to the React applications.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
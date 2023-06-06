import React from 'react';

const Blog = () => {
    return (
        <div>

            <div className='section-title mt-10 mb-28 py-10'>
                <h3 className='mt-4 text-center  font-bold text-5xl'>This Is Blog</h3>
            </div>

            <div>
                <h1 className='text-2xl font-bold'>When should we use contextApi?</h1>
                <p className='mb-8'><span className='text-indigo-500 underline mr-3 font-bold '>Ans:</span>
                        When we want to send data to a particular Component (Without Props Drilling) from parent component.
                </p>


                <h1 className='text-2xl font-bold'>What is useMemo?</h1>
                <p className='mb-8'><span className='text-indigo-500 underline mr-3 font-bold '>Ans:</span>
                    useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
                </p>


                <h1 className='text-2xl font-bold'>What is useRef?</h1>
                <p className='mb-8'><span className='text-indigo-500 underline mr-3 font-bold '>Ans:</span>
                    useRef is a hook which returns an object with a current property set to the value passed to the hook.
                </p>
                <h1 className='text-2xl font-bold'>What is custom hook?</h1>
                <p className='mb-8'><span className='text-indigo-500 underline mr-3 font-bold '>Ans:</span>
                Custom hooks are reusable functions that can be used to add special and unique functionality to the React applications
                </p>
            </div>

        </div>
    );
};

export default Blog;
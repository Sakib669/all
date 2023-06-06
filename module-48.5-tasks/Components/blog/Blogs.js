import React from 'react';
import './Blog.css'

const Blogs = (props) => {
    return (
        <div>
            {
                props.info.map((info) => <ShowBolgs info={info}></ShowBolgs>)
            }
        </div>
    );
};

const ShowBolgs = (props) => {
    return (
        <div className='blog-div'>
            <h3>{props.info.author}</h3>
            <p>{props.info.heading}</p>
        </div>
    );
};

export default Blogs;
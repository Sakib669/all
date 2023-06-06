import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-sakib669.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(err => console.error(err));
    }, [])

    console.log(categories);

    return (
        <div>
            <h4 className="text-dark">All Categories</h4>
            <div className="ps-4 text-decoration-none">
                {
                categories?.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>
                        {category.name}
                    </Link>
                </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://dragon-news-api.vercel.app/news-categories")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className=''>
            <h4>All Category: {categories.length}</h4>
            {
                categories.map(category => <p key={category.id}><Link className='text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSideNav;
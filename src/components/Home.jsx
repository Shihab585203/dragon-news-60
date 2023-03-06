import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from './NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h3>There Has {allNews.length} News</h3>
            {
                allNews.map( news => <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;
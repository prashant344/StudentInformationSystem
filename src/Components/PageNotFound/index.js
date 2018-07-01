import React from 'react';
import TopNavigation from '../TopNavigation';
import './style.css';

const PageNotFound = ()=> {
    return (
        <div>
            <TopNavigation />
            <div className="Error-container">
                <img src="https://cdn.instructables.com/FTU/1BBR/FLI8MT4O/FTU1BBRFLI8MT4O.LARGE.jpg" alt="Not Found" />
                <p>Click below to go to Homepage</p>
                <button className="HomepageBtn"><a href="/">Homepage</a></button>
            </div>
        </div>
    )
}

export default PageNotFound;
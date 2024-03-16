import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
    
            <Link to="/home">Go to home by link</Link>
            Not Found 404
        </div>
    );
};

export default NotFound;
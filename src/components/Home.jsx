import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()
    const go = () =>{
        navigate("/home");

    }
    return (
        <div>
            Home page

            <button onClick={go}>Go to main page</button>
        </div>
    );
};

export default Home;
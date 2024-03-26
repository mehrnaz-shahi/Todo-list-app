import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()
    const go = () => {
        navigate("/home");

    }
    return (
        <div>
            Home page
            <Routes>
                <Route path='profile' element={<h1>Profile</h1>}></Route>
            </Routes>
            <button onClick={go}>Go to main page</button>
        </div>
    );
};

export default Home;
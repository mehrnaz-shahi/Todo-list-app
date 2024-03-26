import React, { useState } from 'react';

import { useContext } from 'react';
import { BookContext } from './Parent';

const B = () => {
    const [title, setTitle] = useState("");
    let {store, setStore} = useContext(BookContext)
    console.log(store);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(title);
        setStore({...store, title})
    }
    return (
        <div>
            <p>This page is B and props is </p>
            <form onSubmit={submitHandler}>
                <input type='text' id='title' onChange={e => setTitle(e.target.value)}/>
                <button type='submit'>Change title</button>
            </form>
        </div>
    );
};

export default B;
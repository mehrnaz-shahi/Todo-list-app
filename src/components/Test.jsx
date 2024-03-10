import React, { useState } from 'react';
import syle from '../assets/styles/test.module.css';
import Form from './Form';



const Test = () => {
    const [counter, setCounter] = useState(0);
    console.log(counter);


    const login = true;


    const data = ["A", 'B', 'C']


    const increase = () => {
        console.log('clicked');
        // counter = counter + 1;
        setCounter(counter => counter + 1);
        num = num + 1;
    }

    const increase3 = () => {
        setCounter(counter => counter + 1)
        setCounter(counter => counter + 1)
        setCounter(counter => counter + 1)

    }




    return (
        <div className={syle.help}>
            {/* <p>Helper</p>
            <br />
            {counter}
            <br/>
            {data?.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
            <button onClick={increase}>Increase</button>
            <button onClick={increase3}>Increase 3</button> */}

            <Form />

        </div>
    )

}



export default Test;

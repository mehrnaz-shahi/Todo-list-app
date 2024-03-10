import React, { useState, useEffect } from 'react';

const Form = () => {



    const [info, setInfo] = useState({
        name: '',
        age: 0,
        gender: 'female',
    });

    useEffect(() => {
        console.log('use effect');
    }, [info])

    const nameHandler = (event) => {
        const name = event.target.value
        console.log(event.target.value);
        setInfo({ ...info, name })
        console.log(info);
    }

    const ageHandler = (e) => {
        // console.log(e.target.value);
        setInfo({ ...info, age: +e.target.value });
    }

    const genderHandler = (e) => {
        setInfo({ ...info, gender: e.target.value })
        console.log(info);

    }


    const formHandler = (event) => {
        const key = event.target.name;
        let value = event.target.value;
        console.log(event.target.name);
        if (key === 'age') {
            value = +value;
        }
        setInfo({ ...info, [key]: value });
    }

    const sendInfo = (event) => {
        event.preventDefault(); 
        console.log("info sent");
    }

    return (
        <div>


            <form onSubmit={sendInfo}>
                <input type="text" name='name' placeholder='Name' onChange={formHandler} />
                <input type="number" name='age' onChange={formHandler} />
                Female
                <input type='radio' value='female' onChange={formHandler} name='gender' />
                Male
                <input type='radio' value='male' onChange={formHandler} name='gender' />

                <button onClick={() => console.log('me')}>Click 2</button> 

                <button type='submit'>Submit</button>
            </form>


        </div>
    );
};

export default Form;
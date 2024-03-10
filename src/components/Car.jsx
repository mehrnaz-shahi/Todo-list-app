import React from 'react';

const Car = ({type, color, price}) => {
    // console.log(props);
    // const {type} = props
    return (
        <div>
            The model of car is {type}
            <p>{price}</p>
        </div>
    );
};

export default Car;
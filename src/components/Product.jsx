import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
    const {id} = useParams();

    const getProducts = () => {
        // fetch(`https://fakestoreapi.com/products/`).then(res => res.json().then(data => console.log(data)));
        const result = axios.get(`https://fakestoreapi.com/product4s/${id}`)
        .then(response => console.log(response.data) )
        .catch((error)=>console.log("Error:", error))
        .finally(console.log("Done!"));
    }
    return (
        <div>
            Product {id}
            <button onClick={getProducts}>Get product</button>
        </div>
    );
};

export default Product;
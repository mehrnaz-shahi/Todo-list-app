import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
    const {id} = useParams();
    const data = {
        body: "body",
        title: "book"
    }

    const getProducts = () => {
        // fetch(`https://fakestoreapi.com/products/`).then(res => res.json().then(data => console.log(data)));
        // const result = axios.get(`https://jsonplaceholder.typicode.com/posts`)
        // .then(response => console.log(response) )
        // .catch((error)=>console.log("Error:", error))
        // .finally(console.log("Done!"));


        const postRes = axios.patch('https://jsonplaceholder.typicode.com/posts/1', {data})
        .then(e=> console.log("post result: ", e))

    }
    return (
        <div>
            Product {id}
            <button onClick={getProducts}>Get product</button>
        </div>
    );
};

export default Product;
import React from 'react';
import A from './A';
import { createContext } from 'react';

const BookContext = createContext();
const Parent = () => {

    const [store, setStore] = React.useState({
        title: 'book1',
        price: '100$'
    })
    

    return (
        <BookContext.Provider value={{store, setStore}}>

            <div>
                <A />
            </div>

        </BookContext.Provider>
    );
};

export default Parent;
export {BookContext}
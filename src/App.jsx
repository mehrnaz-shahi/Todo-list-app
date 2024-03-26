import { useState } from 'react'
import { Fragment } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Test from './components/Test';
import Car from './components/Car';
import TodoList from './components/TodoList';
import NotFound from './components/NotFound';

import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Parent from './components/Parent';


function App() {

  return (
    <Fragment>
      <div className='help'>
        {/* <Test />

        <Car type="BMW" color='red' price={200}/> */}
        <Parent />

        <Routes>
          <Route path='/todo' element={<TodoList />} />
          <Route path='/home/*' element={<Home />} />
          <Route path='/product/:id' element={<Product />}></Route>
          <Route path='/test' element={<Navigate to="/todo" />}></Route>
          <Route path='/*' element={<NotFound />} />
        </Routes>

      </div>


    </Fragment>
  )
}

function helper() {
  return <h1>Helper</h1>
}

export default App;
export { helper };

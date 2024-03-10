import { useState } from 'react'
import { Fragment } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Test from './components/Test';
import Car from './components/Car';
import TodoList from './components/TodoList';


function App() {

  return (
    <Fragment>
      <div className='help'>
        <h1>Hello</h1>
        {/* <Test />

        <Car type="BMW" color='red' price={200}/> */}

        <TodoList />

      </div>


    </Fragment>
  )
}

function helper(){
  return <h1>Helper</h1>
}

export default App;
export {helper};

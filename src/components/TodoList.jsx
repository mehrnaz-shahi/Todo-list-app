import React, { useState } from 'react';

const TodoList = () => {
    const dataObj = new Date();
    const [task, setTask] = useState({
        title: '',
        color: '',
        date: Date.now(),
        done: false,
    });

    const [tasks, setTasks] = useState([]);

    const [error, setError] = useState("");

    const [searchItem, setSearchItem] = useState("");

    console.log(searchItem);
    const taskHandler = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name === 'title') {
            value = value.trim();
        }
        setTask({ ...task, [name]: value });
        console.log(task);
    }

    const addTask = () => {
        if (!task.title) {
            setError("Title is null");
            return;
        }
        setTask({ ...task, id: Date.now() })
        setTasks([...tasks, task]);
        console.log('tasks', tasks);
    }

    const toggleDone = (id) => {
        const updatedTask = tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task)

        setTasks(updatedTask);
    }

    return (
        <div>
         
            <input type="text"  name='search' onChange={(e) => setSearchItem(e.target.value)}/>
            <div>
                <input type="text" name="title" value={task.title} onChange={taskHandler} />
                <input type="color" name='color' value={task.color} onChange={taskHandler} />
                <input type="date" name='date' value={task.date} onChange={taskHandler} />
                <button onClick={addTask}>Add task</button>
            </div>

            {error && <p>{error}</p>}

            <div>
                <h1>Tasks</h1>
                {tasks.filter(task => !task.done).map((task) => (
                    <div key={task.id}>
                        <p> {task.title}</p>
                        <input type='checkbox' onClick={() => toggleDone(task.id)} checked={task.done} />
                    </div>
                ))}


                <h1>Done</h1>
                {tasks.filter(task => task.done).map((task) => (
                    <div key={task.id}>
                        <p> {task.title}</p>
                        <input type='checkbox' onClick={() => toggleDone(task.id)} checked={task.done} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
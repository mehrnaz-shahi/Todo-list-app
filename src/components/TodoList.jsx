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

    const [sortOption, setSortOption] = useState("");

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


    const sortedTasks = [...tasks].sort((a, b) => {
        if(sortOption === "date"){
            return new Date(a.date) - new Date(b.date)
        }
        else if(sortOption === "title"){
            return a.title.localeCompare(b.title)
        }
        

        return 0

    });

    const filterTasks = sortedTasks.filter((task) => task.title.toLowerCase().includes(searchItem));


    return (
        <div>
         
            <input type="text"  name='search' onChange={(e) => setSearchItem(e.target.value)}/>
            <div>
            <label id="title">
                Title: 
                <input type="text" id="title" name="title" value={task.title} onChange={taskHandler} />
            </label>
         
                <input type="color" name='color' value={task.color} onChange={taskHandler} />
                <label  id="date">
                    Date:
                <input type="date"  id="date"name='date' value={task.date} onChange={taskHandler} />
                </label>
                <button onClick={addTask}>Add task</button>
            </div>

            <button onClick={() => setSortOption("date")}>Sort by date</button>
            <button onClick={() => setSortOption("title")}>Sort by title</button>

            {error && <p>{error}</p>}

            <div>
                <h1>Tasks</h1>
                {filterTasks.filter(task => !task.done).map((task) => (
                    <div key={task.id} style={{display: "flex", marginRight: "5px"}}>
                        <p> {task.title}</p>
                        <input type='checkbox' onClick={() => toggleDone(task.id)} checked={task.done} />
                    </div>
                ))}


                <h1>Done</h1>
                {filterTasks.filter(task => task.done).map((task) => (
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
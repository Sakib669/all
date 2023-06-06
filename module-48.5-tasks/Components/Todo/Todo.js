import React, { useEffect, useState } from 'react';
import './Todo.css'



const Todo = () => {
    
    const [datas, setDatas] = useState([]);
    
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setDatas(data))
    }, []);
    
    return (
        <div>
            {
                datas.map(data => <ShowTodoData title={data.title} completed={data.completed} key={data.id} ></ShowTodoData>)
            }
            <ShowTodoData></ShowTodoData>
        </div>
    );
};

const ShowTodoData = (props) => {
    
    return (
        <div className='todo-div'>
            <h4>Tasks: {props.title}</h4>
        </div>
    );
}

export default Todo;
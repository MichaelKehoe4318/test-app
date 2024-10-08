import React from 'react';

// const Task = () => {
function Task(props){

    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>Description: {props.description}</p>
            <button onClick={props.markDone}>Done</button>
            <p>{props.children}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
        </div>
    )
}

export default Task;
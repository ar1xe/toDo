import React, {useState} from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    data: Array<TaskType>
    removeTask: (taskId: number) => void
    filterTasks: (filteredKey: string)=> void
}

export function Todolist(props: PropsType) {

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.data.map((el) => {
                return (
                    <li key={el.id}>
                        <button onClick={() => {
                            props.removeTask(el.id)
                        }}>X
                        </button>
                        <input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                )
            })}
        </ul>
        <div>
            <button onClick={() => {props.filterTasks("All")}}>All</button>
            <button onClick={() => {props.filterTasks("Active")}}>Active</button>
            <button onClick={() => {props.filterTasks("Completed")}}>Completed</button>
        </div>
    </div>
}

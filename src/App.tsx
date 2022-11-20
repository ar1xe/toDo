import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    const [data, setData] = React.useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])

    const [filterValueKey, setFilterValueKey] = useState("All")

    const removeTask = (taskId: number) => {
        setData(data.filter(el => el.id !== taskId))
    }


    const filterTasks = (filteredKey: string) => {
        setFilterValueKey(filteredKey);
    }
    const fooFilter = () => {
        let filteredTasks = data;

        if (filterValueKey === "Active") {
            filteredTasks = data.filter((el) => !el.isDone)
        }
        if (filterValueKey === "Completed") {
            filteredTasks = data.filter((el) => el.isDone)
        }
        return filteredTasks;
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                data={fooFilter()}
                removeTask={removeTask}
                filterTasks={filterTasks}
            />
        </div>
    );
}

export default App;

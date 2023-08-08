'use client'
import {useState} from "react";
import TaskItem from "@/components/TaskItem";
import TaskCreate from "@/components/TaskCreate";

export default function TaskList() {
    const [tasks, setTasks] = useState(initialTasks)

    function handleCreate(task) {
        const newId = Math.max(...tasks.map(task => task.id)) + 1

        setTasks([...tasks, {...task, id: newId}])
    }

    function handleDelete(task) {
        setTasks(tasks.filter(t => t.id !== task.id))
    }

    function handleUpdate(task) {
        setTasks(tasks.map(t => t.id === task.id ? task : t))
    }

    return (
        <div className="mt-5">
            <TaskCreate onCreate={handleCreate}/>
            {tasks.length > 0 ? (
                <ul>
                    {tasks.map(task => (
                        <TaskItem key={task.id} task={task} onDelete={handleDelete} onUpdate={handleUpdate}/>
                    ))}
                </ul>
            ) : (
                <p>No tasks</p>
            )
            }
        </div>
    )
}

const initialTasks = [
    {
        id: 2,
        name: "Task 2",
        status: "In Progress"
    },
    {
        id: 1,
        name: "Task 1",
        status: "Todo"

    },
    {
        id: 4,
        name: "Task 4",
        status: "In Progress"
    },
    {
        id: 3,
        name: "Task 3",
        status: "Done"
    }
]
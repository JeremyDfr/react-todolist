import TaskStatus from "@/components/TaskStatus";
import {useState} from "react";
import Button from "@/components/utils/Button";
import Input from "@/components/utils/Input";

export default function TaskItem({task, onDelete, onUpdate}) {
    const [isEditing, setIsEditing] = useState(false)
    const [taskName, setTaskName] = useState(task.name)

    function handleEdit() {
        setIsEditing(true)
    }

    function handleChange(e) {
        setTaskName(e.target.value)
    }

    function handleUpdate() {
        onUpdate({...task, name: taskName})
        setIsEditing(false)
    }

    function handleDelete() {
        onDelete(task)
    }

    return (
        <li className="border-b border-gray-500 py-2 flex justify-between items-center">
            {!isEditing ? (
                <span onClick={handleEdit}>{task.name}</span>
            ) : (
                <div>
                    <Input type="text" value={taskName} onChange={handleChange}/>
                    <Button className="ml-2 text-white bg-coral-500 hover:bg-coral-600" onClick={handleUpdate}>Edit</Button>
                </div>
            )}
            <TaskStatus status={task.status}/>
            <Button className="text-white bg-red-500 hover:bg-red-600" onClick={handleDelete}>Delete</Button>
        </li>
    )
}
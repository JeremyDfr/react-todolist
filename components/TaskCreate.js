import {useState} from "react";
import Button from "@/components/utils/Button";
import Input from "@/components/utils/Input";

export default function TaskCreate({onCreate}) {
    const [newTask, setNewTask] = useState({
        name: "",
        status: "Todo"
    })

    function handleChange(e) {
        setNewTask({
            name: e.target.value,
            status: "Todo"
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        onCreate(newTask)
        setNewTask({
            name: "",
        })
    }

    return (
        <div className="flex justify-end">
            <form onSubmit={handleSubmit}>
                <Input type="text" name="name" id="name" placeholder={'Task name...'} value={newTask.name} onChange={handleChange} />
                <Button className="ml-2 text-white bg-coral-500 hover:bg-coral-600">Add</Button>
            </form>
        </div>
    )
}
import {useRef} from "react";

export default function TaskStatus({status}) {
    let className = ""

    if (status === "Todo") {
        className = "bg-red-600"
    } else if (status === "In Progress") {
        className = "bg-yellow-600"
    } else if (status === "Done") {
        className = "bg-green-600"
    }

    return (
        <span className={`px-2 py-1 rounded text-white text-xs mb-0 ${className}`}>
            {status}
        </span>
    )
}
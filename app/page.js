import TaskList from "@/components/TaskList";

export default function TaskManager() {

  return (
    <main className="min-h-screen items-center p-24">
      <div className="w-6/12 mx-auto p-8 rounded-xl bg-white text-black">
          <h1 className="text-2xl text-coral-800 font-bold">Task Manager</h1>
          <TaskList />
      </div>
    </main>
  )
}

import { TaskDocument } from "@/models/task"
import TaskDeleteButton from "./TaskDeleteButton/TaskDeleteButton"
import TaskEditButton from "./TaskEditButton/TaskEditButton"

interface TaskCardProps{
  task: TaskDocument;
}

const TaskCard:React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="bg-white p-4 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition duration-300 w-full md:w-80">
      <header className="mb-3">
        <h1 className="text-lg font-bold text-gray-800 truncate">{task.title}</h1>
        <div className="text-xs text-gray-500 line-clamp-2 mt-1">{task.description}</div>
      </header>
      <div className="text-sm text-gray-600 border-t pt-2 mt-2">{task.dueDate}</div>
      <div className="flex justify-between items-center text-sm pt-3 mt-3 border-t">
        <div className={`px-3 py-1 text-xs font-bold rounded-full ${
            task.isCompleted 
              ? 'bg-green-500 text-white' 
              : 'bg-yellow-100 text-yellow-700'
          }`}>{task.isCompleted ? 'Completed': 'Incomplete'}</div>
        <div className="flex space-x-3 text-sm">
          <TaskEditButton id={task._id}/>
          <TaskDeleteButton id={task._id}/>
        </div>      
      </div>
    </div>
  )
}

export default TaskCard

'use client'

import { FormState, updateTask } from "@/actions/task";
import { TaskDocument } from "@/models/task"
import { useState } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

interface EditTaskFormProps {
  task: TaskDocument;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({task}) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  const updateTaskWithId = updateTask.bind(null, task._id);
  const initialState: FormState = {error: ''};
  const [state, formAction] = useActionState(updateTaskWithId, initialState);

  const SubmitButton = () => {
    const {pending} =useFormStatus();
    return(
      <button 
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 disabled:bg-gray-400"
          disabled={pending}
        >
          edit
      </button>
    )
  }

  return (
    <div className="mt-10 mx-auto w-full max-w-lg p-6 bg-white rounded-xl shadow-2xl border border-gray-100">
      <form action={formAction} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">タイトル</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            value={title}
            onChange={(e) => {setTitle(e.target.value)}}
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">詳細</label>
          <input 
            type="text" 
            id="description" 
            name="description" 
            value={description}
            onChange={(e) => {setDescription(e.target.value)}}
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
          />
        </div>
        <div>
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">期限日</label>
          <input 
            type="date" 
            id="dueDate" 
            name="dueDate" 
            min="2020-01-01"
            max="2999-12-31"
            value={dueDate}
            onChange={(e) => {setDueDate(e.target.value)}}
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
          />
        </div>
        <div className="mt-6 flex items-center">
          <input 
            type="checkbox" 
            id="isCompleted" 
            name="isCompleted" 
            className="mr-2 w-4 h-4"
            checked={isCompleted}
            onChange={(e) => {setIsCompleted(e.target.checked)}}
          />
          <label htmlFor="isCompleted" className="text-sm">complete task</label>
        </div>
        <SubmitButton />
        {state.error !== '' && (
          <p className="mt-2 text-red-500 text-sm">{state.error}</p>
        )}
      </form>
    </div>
  )
}

export default EditTaskForm
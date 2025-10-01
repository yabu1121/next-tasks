'use client';

import { createTask, FormState } from "@/actions/task";
import { useFormState, useFormStatus } from "react-dom";

const NewTaskForm = () => {
  const initialState: FormState = { error : '' };
  const [state, formAction] = useFormState(createTask, initialState);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button 
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 disabled:bg-gray-400"
          disabled = {pending}
        >
          create
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
            required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
          />
        </div>
        <SubmitButton />
        {state.error && (<p className="mt-w text-red-500 text-sm">{state.error}</p>)}
      </form>
    </div>
  )
}

export default NewTaskForm
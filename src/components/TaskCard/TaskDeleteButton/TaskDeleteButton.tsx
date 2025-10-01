'use client'

import { deleteTask, FormState } from "@/actions/task";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonProps{
  id: string;
}

const TaskDeleteButton:React.FC<TaskDeleteButtonProps> = ({ id }) => {
  const deleteTaskWithId = deleteTask.bind(null, id);
  const initialState: FormState = {error: ''};
  const [state, formAction] = useActionState(deleteTaskWithId, initialState);

  useEffect(() => {
    if(state && state.error !== ''){
      alert(state.error);
    }
  },[state])

  const SubmitButton = () => {
    const {pending} = useFormStatus();
    return(
        <button 
          type="submit" 
          disabled={pending}
          className="hover:text-gray-700 text-lg cursor-pointer disabled:bg-gray-400">
          <FaTrashAlt />
        </button>
    )
  }
  return (
    <div>
      <form action={formAction}>
        <SubmitButton />
      </form>
    </div>
  )
}

export default TaskDeleteButton

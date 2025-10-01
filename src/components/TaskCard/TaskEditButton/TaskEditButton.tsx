import { React } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints";
import Link from "next/link";
import { FaPen } from "react-icons/fa";

interface TaskEditButtonProps {
  id: string;
}
const TaskEditButton:React.FC<TaskEditButtonProps> = ({ id }) => {
  return (
    <div>
      <Link href={`/edit/${id}`}>
      <FaPen className="hover:text-gray-700 text-lg cursor-pointer" />
      </Link>
    </div>
  )
}

export default TaskEditButton

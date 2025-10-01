import { TaskDocument, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try{
    await connectDb();
    const completedTasks: TaskDocument[] = await TaskModel.find({
      isCompleted:true,
    });
    return NextResponse.json({message: 'get task', tasks: completedTasks})
  }catch(error){
    console.log(error);
    return NextResponse.json({message: 'failed'}, {status:500});
  }
}

export const dynamic = 'force-dynamic';
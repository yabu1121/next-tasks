import { TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _:NextRequest, 
  {params} : { params: {id: string}}
):Promise <Response> => {
  try{
    await connectDb();
    const task = await TaskModel.findById(params.id);
    if(!task){
      return NextResponse.json(
        {message: 'not exist task '},
        {status: 404},
      )
    }
    return NextResponse.json({message: 'get task', task})
  }catch(error){
    console.log(error);
    return NextResponse.json({ message: 'failed get task' },{ status : 500 });
  }
};

export const dynamic = 'force-dynamic';
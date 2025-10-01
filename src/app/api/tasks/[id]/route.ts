import { TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";
import { Response } from "next/server";

export const GET = async (
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
): Promise<Response> => {

  const params = await context.params;
  const taskId = params.id;

  try {
    await connectDb();
    const task = await TaskModel.findById(taskId);

    if (!task) {
      return NextResponse.json(
        { message: 'not exist task ' },
        { status: 404 },
      )
    }

    return NextResponse.json({ message: 'get task', task })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'failed get task' }, { status: 500 });
  }
};

export const dynamic = 'force-dynamic';
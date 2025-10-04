'use server'
import { TaskModel, Task } from "@/models/task";
import { connectDb } from "@/utils/database";
import { redirect } from "next/navigation";

// interface typescriptの方を宣言している。
// errorという要素をFormStateが持ち、それはstring型で定義される。
export interface FormState {
  error: string;
}

// createTask関数を非同期で宣言する。
// 引数はstate,formDataでありそれはそれぞれFormState, FormDataの方宣言に則っている
// newTaskを宣言する
// title, formDataから情報をget関数(引数'title')で取得し、string型で保存する
// description, formDataから情報をget関数(引数'description')で取得し、string型で保存する
// dueDate, formDataから情報をget関数(引数'dueDate')で取得し、string型で保存する
// inCompleted, タスク製作段階では標準でisCompletedがfalseになる。
export const createTask = async (state: FormState, formData: FormData) => {
  const newTask: Task = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    dueDate: formData.get('dueDate') as string,
    isCompleted: false,
  }

  // DBを用いるのでtry,catchで処理を導入する。
  // try関数の中にはconnectDb()関数を実行して、DBと接続する。
  // TaskModelをcreateメソッドを使ってnewTaskを生成する。
  try {
    await connectDb()
    await TaskModel.create(newTask)
  } catch (error) {
    state.error = 'failed create task';
    return state;
  }

  redirect('/')
}

export const updateTask = async (id: string, state: FormState, formData: FormData) => {
  const updatedTask: Task = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    dueDate: formData.get('dueDate') as string,
    isCompleted: Boolean(formData.get('isCompleted')),
  }

  try {
    await connectDb()
    await TaskModel.updateOne({ _id: id }, updatedTask)
  } catch (error) {
    state.error = 'failed to update task';
    return state;
  }

  redirect('/')
}

export const deleteTask = async (id: string, state: FormState) => {
  try {
    await connectDb()
    await TaskModel.deleteOne({ _id: id })
  } catch (error) {
    state.error = 'failed to delete task';
    return state;
  }

  redirect('/')
}
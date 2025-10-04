import mongoose, { Document } from "mongoose";

// interfaceでTaskの型宣言を行う
export interface Task {
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
}

// interfaceでTaskDocumentの型宣言を行う
// TaskとDocumentを引き継いだ状態で、Doucumentはmongooseの標準ファイルにある。
// その状態の_idの情報を上書きする
// createdAt, updateAtを設定する。
export interface TaskDocument extends Task, Document {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

// interfaceでtaskSchemaの型宣言を行う
const taskSchema = new mongoose.Schema<TaskDocument>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  dueDate: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true })

// interfaceでTaskの型宣言を行う
export const TaskModel = mongoose.models.Task || mongoose.model('Task', taskSchema)
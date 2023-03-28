import mongoose from "mongoose";
import { TaskStatusEnum } from "../enum/task-status";

export interface ITask extends  mongoose.Document {
    userId:string
    title:string;
    description:string;
    status:TaskStatusEnum;
    deadline:Date;
    createdAt:Date;
    deleted:Date;
}
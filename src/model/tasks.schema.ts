import mongoose, { Schema } from 'mongoose';
import { TaskStatusEnum } from './enum/task-status';
import { ITask } from './interfaces/tasks.interface';

const TaskSchema:mongoose.Schema =new Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'users'},
    title:{type:String,required:true},
    description:{type:String,default:null},
    status:{type:String,enum:TaskStatusEnum,default:TaskStatusEnum.BACKLOG},
    deadline:{type:Date,default:null},
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
},{ timestamps:true });

export default mongoose.model<ITask>("tasks", TaskSchema)
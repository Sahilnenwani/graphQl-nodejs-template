import mongoose from "mongoose";
import { ITask } from "../model/interfaces/tasks.interface";
import TasksModel from "../model/tasks.schema";

export default function Task(){
    const ById=async(id: string): Promise<ITask | null> =>{
      return await TasksModel.findById(
        id
      ).populate("userId");
    }
    const getAll= async (): Promise<Array<ITask>> =>{
      return await TasksModel.find().populate("userId");
    }
    async function add(task: ITask): Promise<ITask> {
      return await TasksModel.create(task);
    }
    const updateById=async (
      id: string,
      task: ITask
    ): Promise<ITask | null>=> {
      return await TasksModel.findByIdAndUpdate(id, task, { new: true });
    }
    const deleteById= async (id: string): Promise<string> =>{
      await TasksModel.findByIdAndDelete(id);
      return "user task deleted successfuly";
    }
    return { ById, getAll, add, deleteById, updateById };
}
































// class TaskService{
//     async getTaskById(id:string):Promise<ITask | null>{
//         return await TasksSchema.findById(new mongoose.Types.ObjectId(id)).populate("userId");
//     }
//     async getTasks():Promise<Array<ITask>>{
//         return await TasksSchema.find().populate("userId");
//     }

//    async addTask(task:ITask):Promise<ITask>{
//         return await TasksSchema.create(task);
//     }
//     async updateTaskById(id:string,task:ITask):Promise<ITask| null>{
//         return await TasksSchema.findByIdAndUpdate(id,task,{new:true})
//     }

//     async deleteTaskById(id:string):Promise<string>{
//         await TasksSchema.findByIdAndDelete(new mongoose.Types.ObjectId(id));
//         return "user task deleted successfuly";
//     }
// }

// export default new TaskService;

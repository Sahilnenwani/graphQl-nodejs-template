import mongoose from "mongoose";
import { ITask } from "./tasks.interface";

export interface IUser extends mongoose.Document{
    name:string;
    address:string;
    age:number;
    dateOfBirth:Date
    // tasks:Array<ITask>;
    createdAt?:Date;
    deleted:Date;
}
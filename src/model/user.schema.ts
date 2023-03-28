import mongoose, { Schema } from 'mongoose';
import { IUser } from './interfaces/user.interface';

const UserSchema:mongoose.Schema=new Schema({
    name:{type:String, required: true},
    address:{type:String,default:null},
    age:{type:Number},
    dateOfBirth:{ type: Date, required:true },
    // tasks:[{taskId:{type: mongoose.Schema.Types.ObjectId,ref: 'task'}}],
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
},{ timestamps:true });
// const User= mongoose.model('user',UserSchema);
// export default User; 
export default mongoose.model<IUser>("users", UserSchema)
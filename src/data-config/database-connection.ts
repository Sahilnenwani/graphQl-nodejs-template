import mongoose from "mongoose";


const Mongo = () => {

  const databaseUri:string=process.env.MONGODB_URL_DATABASE || 'mongodb://127.0.0.1:27017/todos';
  const connect = async () => {
    try {
      await mongoose.connect(databaseUri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      });
      console.log("connected with database");
    } catch (error:any) {
        console.log("error occured while connecting database",error.message);
    }
  }
  return {connect}
}



export default Mongo;
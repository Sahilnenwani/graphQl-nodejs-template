import merge from "lodash.merge";
import { TaskResolver } from "./task-resolver";
import { UserResolver } from "./user-resolver";
export default merge(TaskResolver, UserResolver);
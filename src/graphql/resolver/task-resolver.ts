import mongoose from "mongoose";
import { ITask } from "../../model/interfaces/tasks.interface";
import TaskService from "../../services/task-services";

const Task = TaskService();

export const TaskResolver = {
  Query: {
    hello(): string {
      return "hello from Task";
    },
    getTasks: async (parent: any): Promise<ITask[]> =>
      await Task.getAll(),
    getTaskById: async (parent: any, {id}:{id: string}): Promise<ITask | null> =>
      await Task.ById(id),
  },
  Mutation: {
    createTask: async (
      parent: any,
      { task }: { task: ITask }
    ): Promise<ITask> => await Task.add(task),
    updateTask: async (
      parent: any,
      { id,task }: {id:string, task: ITask }
    ): Promise<ITask | null> => {
      return await Task.updateById(id, task);
    },
    deleteTaskById: async (parent: any, {id}:{id: string}): Promise<string> =>
      Task.deleteById(id),
  },
};

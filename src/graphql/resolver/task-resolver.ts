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
      { task }: { task: ITask }
    ): Promise<ITask | null> => {
      const taskId = task.id;
      delete task.id;
      return await Task.updateById(taskId, task);
    },
    deleteTaskById: async (parent: any, {id}:{id: string}): Promise<string> =>
      Task.deleteById(id),
  },
};

import { IUser } from "../model/interfaces/user.interface"
import userModel from "../model/user.schema"

export default function User() {
  const byId = async (id: string): Promise<IUser | null> => {
    return await userModel.findById(id)
  }

  const getAll = async (): Promise<Array<IUser>> => {
    return await userModel.find()
  }

  const addNew = async (userData: IUser): Promise<IUser> => {
    return await userModel.create(userData)
  }
  const updateById = async (
    id: string,
    userData: IUser
  ): Promise<IUser | null> => {
    return await userModel.findByIdAndUpdate(id, userData, { new: true })
  }

  const deleteById = async (id: string): Promise<string> => {
    await userModel.findByIdAndDelete(id)
    return "user deleted successfuly"
  }
  return {
    byId,
    getAll,
    addNew,
    updateById,
    deleteById
  }
}

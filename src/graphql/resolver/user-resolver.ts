import { IUser } from "../../model/interfaces/user.interface"
import User from "../../services/user-services"
const user = User()

export const UserResolver = {
  Query: {
    helloUser(): string {
      return "hello from User"
    },
    getUsers: async (parent: any): Promise<Array<IUser>> => await user.getAll(),

    getUserById: async (
      parent: any,
      { id }: { id: string }
    ): Promise<IUser | null> => await user.byId(id)
  },
  Mutation: {
    createUser: async (
      parent: any,
      { userData }: { userData: IUser }
    ): Promise<IUser> => await user.addNew(userData),
    updateUser: async (
      parent: any,
      { id, userData }: { id: string; userData: IUser }
    ): Promise<IUser | null> => {
      return await user.updateById(id, userData)
    },
    deleteUserById: async (
      parent: any,
      { id }: { id: string }
    ): Promise<string> => await user.deleteById(id)
  }
}

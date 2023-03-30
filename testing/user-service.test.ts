import mongoose from "mongoose"
import { IUser } from "../src/model/interfaces/user.interface"
import UserService from "../src/services/user-services"
import userModel from "../src/model/user.schema"

const User = UserService()

describe("User methods", () => {
  let user1
  let user2
  beforeAll(async () => {
    const databaseUri: string =
      process.env.MONGODB_URL_DATABASE || "mongodb://127.0.0.1:27017/todo-test"
    await mongoose.connect(databaseUri, {})

    user1 = await userModel.create({
      name: "Sahil Nenwai",
      age: 20,
      address: "my address",
      dateOfBirth: dateToIsoString("01-03-2001")
    })
    user2 = await userModel.create({
      name: "Sharoz R",
      age: 22,
      address: "my address....",
      dateOfBirth: dateToIsoString("22-02-1999")
    })
    user1 = await userModel.findById(user1._id)
    user2 = await userModel.findById(user2._id)
  })

  afterAll(async () => {
    await userModel.deleteMany({})
    await mongoose.disconnect()
  })

  test("addNew method should add new user in user table", async () => {
    // clg
    const mokerUser = {
      name: "jhon",
      age: 25,
      dateOfBirth: dateToIsoString("22-02-1999")
    } as IUser
    const userData = (await User.addNew(mokerUser)) as IUser
    // const userFormDatabase = (await User.byId(userData._id)) as IUser
    expect(userData).toMatchObject(mokerUser)
  })
  test("byId method should get single user by it's Id", async () => {
    const userData = await User.byId(user1._id)
    expect(userData).toMatchObject(user1)
  })
  test("getAll method will get all user", async () => {
    const usersData = await User.getAll()
    expect(usersData.length).toBeGreaterThanOrEqual(2)
    // expect(usersData[0]).toContainEqual(user1)
    // expect(usersData[1]).toContainEqual(user2)
    expect(usersData).toBeInstanceOf(Array)
  })

  test("updateById methdd should update user data by it's id", async () => {
    if (user1) {
      const updatedUserData = { name: "Jane Doe", age: 30 } as IUser
      const updatedUser = await User.updateById(user1._id, updatedUserData)
      const userFormDatabase = (await User.byId(user1._id)) as IUser
      expect(updatedUser).toEqual(userFormDatabase)
    }
  })
  test("deleteById method should delete user by it's id", async () => {
    if (user1) {
      const result = await User.deleteById(user1._id)
      expect(result).toBe("user deleted successfuly")
      const deletedUser = await userModel.findById(user1._id)
      expect(deletedUser).toBeNull()
    }
  })
})

const dateToIsoString = (date: string): Date => {
  const dateParts = date.split("-")
  const year = parseInt(dateParts[2])
  const month = parseInt(dateParts[1]) - 1
  const day = parseInt(dateParts[0])
  return new Date(year, month, day)
}

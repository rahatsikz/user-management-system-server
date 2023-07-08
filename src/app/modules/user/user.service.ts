import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";

const createUser = async (payload: IUser): Promise<IUser> => {
  const createdUser = await User.create(payload);
  return createdUser;
};

const getAllUsers = async (): Promise<IUser[]> => {
  const result = await User.find({});
  return result;
};

export const UserService = {
  createUser,
  getAllUsers,
};

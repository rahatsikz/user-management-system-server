import { Model } from "mongoose";

export type IUser = {
  name: string;
  email: string;
  phone: number;
};

export type UserModel = Model<IUser, Record<string, unknown>>;

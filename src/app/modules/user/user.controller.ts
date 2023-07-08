import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { UserService } from "./user.service";
import { sendResponse } from "../../../shared/sendResponse";
import { IUser } from "./user.interface";
import httpStatus from "http-status";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...user } = req.body;

  const result = await UserService.createUser(user);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User created Successfully",
    data: result,
  });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUsers();

  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrieved Successfully",
    data: result,
  });
});

export const UserController = {
  createUser,
  getAllUsers,
};

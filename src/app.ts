//app.ts
import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { UserRoutes } from "./app/modules/user/user.route";
import httpStatus from "http-status";

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route
app.use("/api/v1/users", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: "Welcome to User Management System Server",
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Api not found",
    errorMessages: [{ path: req.originalUrl, message: "Api not found" }],
  });
});

export default app;

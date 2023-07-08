//app.ts
import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { UserRoutes } from "./app/modules/user/user.route";

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route
app.use("/api/v1/users", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to User Management system");
});

export default app;

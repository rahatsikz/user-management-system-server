"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//app.ts
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./app/modules/user/user.route");
const http_status_1 = __importDefault(require("http-status"));
app.use((0, cors_1.default)());
// parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// route
app.use("/api/v1/users", user_route_1.UserRoutes);
app.get("/", (req, res) => {
    res.status(http_status_1.default.OK).json({
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Welcome to User Management System Server",
    });
});
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "Api not found",
        errorMessages: [{ path: req.originalUrl, message: "Api not found" }],
    });
});
exports.default = app;

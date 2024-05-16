import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./Routes";
import userRouter from "./Routes/userRouter";
const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use(router);
server.use(userRouter);

export default server;

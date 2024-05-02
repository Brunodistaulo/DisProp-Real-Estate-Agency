import { Router } from "express";
import { getOneUser, getUsers, loginUser, registerUser } from "../Controllers/userControllers";
const userRouter: Router = Router();



userRouter.get("/", getUsers);
userRouter.get("/:id", getOneUser);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter
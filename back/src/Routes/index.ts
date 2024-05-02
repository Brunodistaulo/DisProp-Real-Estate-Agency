import { Router } from "express";
import userRouter from "./userRouter";
import appointmentRouter from "./appoimentRouter";
const router = Router();

router.use("/users", userRouter);
router.use("/appointments", appointmentRouter);

export default router;

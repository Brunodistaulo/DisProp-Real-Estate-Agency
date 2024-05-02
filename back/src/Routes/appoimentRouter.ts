import { Router } from "express";
import { cancelAppointment, getAppointments, getOneAppointment, scheduleAppointment } from "../Controllers/appoinmentControllers";
const appointmentRouter: Router = Router();



appointmentRouter.get("/", getAppointments );
appointmentRouter.get("/appointment", getOneAppointment );
appointmentRouter.post("/schedule", scheduleAppointment );
appointmentRouter.put("/cancel", cancelAppointment);

export default appointmentRouter
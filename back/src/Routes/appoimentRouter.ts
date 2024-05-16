import { Router } from "express";
import { cancelAppointment, getAppointments, getOneAppointment, scheduleAppointment, getAppointmentByUser } from "../Controllers/appoinmentControllers";
const appointmentRouter: Router = Router();



appointmentRouter.get("/", getAppointments );
appointmentRouter.get("/:id", getOneAppointment );
appointmentRouter.post("/schedule", scheduleAppointment );
appointmentRouter.put("/cancel/:id", cancelAppointment);
appointmentRouter.get("/user/:id", getAppointmentByUser)

export default appointmentRouter
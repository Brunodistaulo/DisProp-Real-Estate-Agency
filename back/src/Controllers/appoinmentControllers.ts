import { Request, Response } from "express";
import { cancelAppointmentService, createApppointment, getAppointmentByIdService, getAppointmentsByUserId, getAppointmentsService } from "../Service/appointmentService";

export const getAppointments = async (req: Request, res: Response): Promise<void> => {
    const getAppointments = await getAppointmentsService()
    res.status(200).json(getAppointments)
}

export const getOneAppointment = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    const getAppointment = await getAppointmentByIdService(Number(id))
    res.status(200).json(getAppointment)
}

export const getAppointmentByUser = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params
    const getOneAppointmentById = await getAppointmentsByUserId(id);
    res.status(200).json(getOneAppointmentById);
}

export const scheduleAppointment = async (req: Request, res: Response): Promise<void> => {
    const {date, time, Propiedades, Localidad, userId} = req.body
    const newAppointment = await createApppointment({date,time, Localidad, Propiedades},userId)
    res.status(200).json(newAppointment)
}

export const cancelAppointment = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params
    const cancelAppointment = await cancelAppointmentService(Number(id))
    res.status(200).json(cancelAppointment)
} 
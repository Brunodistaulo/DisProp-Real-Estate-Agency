//* /appointments
//* GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
//* GET /appointment => Obtener el detalle de un turno específico.
//* POST /appointment/schedule => Agendar un nuevo turno.
//* PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
import { Request, Response } from "express";

export const getAppointments = async (req: Request, res: Response): Promise<void> => {

    res.status(200).send("ahi tenes todos los appointments pa")
}

export const getOneAppointment = async (req: Request, res: Response): Promise<void> => {

    res.status(200).send("ahi tenes un appointment pa")
}

export const scheduleAppointment = async (req: Request, res: Response): Promise<void> => {

    res.status(200).send("ahi tenes el cronograma de un appointment pa")
}

export const cancelAppointment = async (req: Request, res: Response): Promise<void> => {

    res.status(200).send("se canceló un appointment pa")
} 
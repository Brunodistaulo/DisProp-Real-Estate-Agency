import { Request, Response } from "express";





export const getUsers = async (req: Request, res: Response): Promise<void> => {
    res.status(200).send("ahi tenes todos los user pa")
}

export const getOneUser = async (req: Request, res: Response): Promise<void> => {
    res.status(200).send("ahi tenes un user pa")
}

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    res.status(200).send("User registrado pa")
}

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    res.status(200).send("User logueado pa")
}



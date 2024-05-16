import { Request, Response } from "express";
import { getUserById, getUsersService } from "../Service/userService";
import { createUser } from "../Service/userService";
import { credentialValidation } from "../Service/credentialService";




export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const userAll = await getUsersService()
        res.status(200).json(userAll)
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
}

export const getOneUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params
        const userId = await getUserById(Number(id))
        res.status(200).json(userId)
        
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
}

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {  
        const {username, password, email, name, birthdate, nDni} = req.body
        const credentials = {password, username};
        const user = {name, email, birthdate, nDni}
        const newUser = await createUser(user, credentials)
        res.status(201).json(newUser)
    }   catch (error: any) {
        res.status(400).json({error: error.message})
    }
}

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const {username, password} = req.body
    try {
        const credentials = await credentialValidation(username, password)
        res.status(200).json(credentials)
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
}



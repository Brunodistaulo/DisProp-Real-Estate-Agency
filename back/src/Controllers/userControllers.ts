import { Request, Response } from "express";
import { getUserById, getUsersService } from "../Service/userService";
import { createUser } from "../Service/userService";
import { credentialValidation } from "../Service/credentialService";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'secret'


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
        const userId = await getUserById(id)
        res.status(200).json(userId)
        
    } catch (error: any) {
        res.status(404).json({error: error.message})
    }
}

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {  
        const {password, NewEmail, name, nDni} = req.body
        const credentials = {password, email: NewEmail};
        const user = {name, NewEmail, nDni}
        const newUser = await createUser(user, credentials)
        const token = jwt.sign({id: newUser.id}, JWT_SECRET, {expiresIn: '1d'})
        res.status(201).json({token})
    }   catch (error: any) {
        res.status(400).json({error: error.message})
    }
}

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const {email, password} = req.body
    try {
        const credentials = await credentialValidation(email, password)
        console.log(credentials)
        const token = jwt.sign({id: credentials}, JWT_SECRET, {expiresIn: '1d'})

        res.status(200).json({token})
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
}



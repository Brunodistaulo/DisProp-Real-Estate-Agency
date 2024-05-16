import UserDto from "../dto/userDto";
import credentialsDto from "../dto/credentialsDto";
import { UserModel } from "../Config/data-source";
import { createCredentials } from "./credentialService";
import { User } from "../entities/User";


export const getUsersService = async () => {
    const users = await UserModel.find({relations: ["appointments"]});
    return users;
};


export const getUserById = async (id: number) => {
    const user = await UserModel.findOne({where: {id}, relations: ["appointments"]});
    return user
};

export const createUser = async (newUser: UserDto, credentials: credentialsDto)=> {

    const {username, password} = credentials
    const {name, email, birthdate, nDni} = newUser
    const credentialsId = await createCredentials(username, password)
    const user: User = await UserModel.create({
        name,
        email,
        birthdate,
        nDni,
        credentialsId: {
            id: credentialsId
        }
    });
    
    const result = await UserModel.save(user);
    

    return result
};

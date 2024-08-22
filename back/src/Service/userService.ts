import UserDto from "../dto/userDto";
import credentialsDto from "../dto/credentialsDto";
import { UserModel, CredentialsModel } from "../Config/data-source";
import { User } from "../entities/User";
import { Credentials } from "../entities/Credentials";
import { v4 as uuidv4 } from 'uuid';

export const getUsersService = async () => {
    const users = await UserModel.find({relations: ["appointments"]});
    return users;
};

export const getUserById = async (id: string) => {
    const user = await UserModel.findOne({where: {id}, relations: ["appointments"]});
    return user;
};

export const createUser = async (newUser: UserDto, bodyCredentials: credentialsDto) => {

    const { email, password } = bodyCredentials;
    const { name, NewEmail, nDni } = newUser;

    // Generar un UUID que será utilizado tanto para el usuario como para las credenciales
    const uuid = uuidv4();

    // Crear el usuario con el UUID generado
    const user: User = UserModel.create({
        id: uuid, // Asigna el UUID al usuario
        name,
        email: NewEmail,
        nDni,
    });

    // Crear las credenciales con el mismo UUID
    const credentials: Credentials = CredentialsModel.create({
        id: uuid, // Asigna el mismo UUID a las credenciales
        email,
        password,
        user, // Asocia las credenciales con el usuario
    });

    // Guardar el usuario y las credenciales en la base de datos
    await UserModel.save(user);
    await CredentialsModel.save(credentials);

    return user;
};

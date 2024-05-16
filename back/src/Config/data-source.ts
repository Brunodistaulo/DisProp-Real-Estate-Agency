import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Credentials } from "../entities/Credentials"
import { Appointments } from "../entities/Appointments"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "bruno123",
    database: "modulo4typeorm",
    synchronize: true,
    // dropSchema: true,
    logging: false,
    entities: [User, Credentials, Appointments],
    subscribers: [],
    migrations: [],
})

export const UserModel = AppDataSource.getRepository(User)
export const CredentialsModel = AppDataSource.getRepository(Credentials)
export const AppointmentsModel = AppDataSource.getRepository(Appointments)
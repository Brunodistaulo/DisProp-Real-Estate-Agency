import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity({
    name: "appointments",
})
export class Appointments {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    date: Date;
    
    @Column()
    time: string;
    

    @Column()
    Propiedades: string;

    @Column()
    Localidad: string;

    @Column({default: "active"})
    status: "active" | "cancelled";
    
    @ManyToOne(() => User, (user) => user.appointments)
    user: User

};
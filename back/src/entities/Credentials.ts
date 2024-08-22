import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name: "credentials",
})
export class Credentials {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 100 })
    email: string;

    @Column()
    password: string;

    @OneToOne(() => User)
    @JoinColumn({ name: "id" }) 
    user: User;
}

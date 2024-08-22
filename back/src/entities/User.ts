import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany  } from "typeorm";
import { Credentials } from "./Credentials";
import { Appointments } from "./Appointments";
import { v4 as uuid } from "uuid";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string = uuid();

  @Column({length: 100,})
  name: string;

  @Column()
  email: string;
  
  @Column("integer")
  nDni: number;

  @OneToOne(() => Credentials)
  @JoinColumn()
  credentials: Credentials;

  @OneToMany(() => Appointments, (appointments) => appointments.user)
  appointments: Appointments[];


}
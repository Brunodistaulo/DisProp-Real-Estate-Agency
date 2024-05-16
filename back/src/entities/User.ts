import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany  } from "typeorm";
import { Credentials } from "./Credentials";
import { Appointments } from "./Appointments";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100,})
  name: string;

  @Column()
  email: string;
  
  @Column()
  birthdate: Date;

  @Column("integer")
  nDni: number;

  @OneToOne(() => Credentials)
  @JoinColumn()
  credentialsId: Credentials;

  @OneToMany(() => Appointments, (appointments) => appointments.user)
  appointments: Appointments[];


}
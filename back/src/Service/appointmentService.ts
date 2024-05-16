
import { AppointmentsModel, UserModel } from "../Config/data-source";
import appointmentDto from "../dto/appoinmentDto";
import { Appointments } from "../entities/Appointments";


export const getAppointmentsService = async () => {
  const appointment = await AppointmentsModel.find();
  return appointment;
};

export const getAppointmentByIdService = (id: number)=> {
  const appointment = AppointmentsModel.findOneBy({id});
  return appointment;
};

export const getAppointmentsByUserId = async (userId: number) => {
  const appointmentId = await AppointmentsModel.find({where: {user: {id: userId}}});
  if(!appointmentId){
    throw new Error ("Appointment not found");
  }
  return appointmentId;
}

export const createApppointment = async (newAppointment: appointmentDto, userId: number) => {

  const { date, time} = newAppointment;
  
  const userChecked = await UserModel.findOne({where: {id: userId}});

  if (!userChecked) {
    throw new Error("El turno no tiene ID de usuario");
  } 
  const newAppointmentCreated = AppointmentsModel.create({
    date,
    time,
    user: userChecked
  });
  
  const results = await AppointmentsModel.save(newAppointmentCreated);
  return results;
  
};

export const cancelAppointmentService = async (id: number) => {

  const appointment = await getAppointmentByIdService(id);

  if (appointment) {
    if (appointment.status === "cancelled") {
      throw new Error("El turno ya se encuentra cancelado");
    }
    appointment.status = "cancelled";
    const result = await AppointmentsModel.save(appointment)
    return result;
  }else{
    throw new Error("El turno no existe");
  }
  
};

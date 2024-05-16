import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { DivCustom, FormCustom, ButtonCustom, InputCustom} from "../CreateAppointment/CreateAppointmentStyle";
import appointmentValidation from "../../helpers/validateAppointment";

const CreateAppointment = () => {
    
    const userId = useSelector(state => state.user.id)
    const [turnData, setTurnData] = useState({
        date: "",
        time:""
    })
    const [errors, setErrors] = useState({
        date: "",
        time:""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        setTurnData({...turnData, [name]: value});
        
        const error = appointmentValidation(turnData);
        setErrors(error);
    }
    const handleSubmitTurn = async (e)=>{
        e.preventDefault()
        await axios.post("http://localhost:3000/appointments/schedule",{
            ...turnData,
            userId: userId
        })
        .then(()=>{
            alert("Turno agendado Correctamente")

        })
        .catch((error)=>{
            alert("Error al cargar turno")
        })
    }


    return (
        <DivCustom>
        <h1>Crear turno</h1>
        <FormCustom onSubmit={handleSubmitTurn}>
        <div>
            <label>Fecha</label>
            <InputCustom type="date" name="date" value={turnData.date} onChange={handleChange}/>
            {errors.date && <p>{errors.date}</p>}
            
        </div>
        <div>
            <label>Hora</label>
            <InputCustom type="time" name="time" value={turnData.time} onChange={handleChange}/>
            {errors.time && <p>{errors.time}</p>}
        </div>
        <ButtonCustom type="submit">Agregar turno</ButtonCustom>
        </FormCustom>
        </DivCustom>
    )
}

export default CreateAppointment
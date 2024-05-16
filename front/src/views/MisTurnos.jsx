import axios from "axios";
import { useEffect } from "react";
import {DivCustom, H1Turn} from "../components/Turno/MisTurnos";
import Turno from "../components/Turno/Turn";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAppointment } from "../redux/reducer";
const MisTurnos = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const turnos =  user.userAppointment

    useEffect(() => {
        if (user.id) {
            axios.get(`http://localhost:3000/appointments/user/${user.id}`)
            .then(res => dispatch(addAppointment(res.data)))
        }else{
                navigate("/");
            }
        }, []);
    
    const handleCancel = async () => {
       await axios.get(`http://localhost:3000/appointments/user/${user.id}`)
        .then(res => dispatch(addAppointment(res.data)))
        .catch(()=> alert("Error al cargar los turnos"))
    }

    return (
        <div>
            <H1Turn>Mis Turnos</H1Turn>
            <DivCustom>
            {
                turnos.map(turno => {
                    
                    return <Turno key={turno.id} Turno={turno} onCancel={handleCancel}/>
                })
            }
            </DivCustom>
        </div>
    )
};

export default MisTurnos;
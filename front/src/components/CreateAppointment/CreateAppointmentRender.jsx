import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  DivCustom,
  FormCustom,
  ButtonCustom,
  InputCustom,
} from "../CreateAppointment/CreateAppointmentStyle";
import appointmentValidation from "../../helpers/validateAppointment";
import { useNavigate, useLocation } from "react-router-dom";

const CreateAppointment = () => {
  const userId = useSelector((state) => state.user.id);
  const navigate = useNavigate();
  const location = useLocation();
  const { property, loc } = location.state || {};

  const [turnData, setTurnData] = useState({
    date: "",
    time: "",
    Propiedades:"" || property,
    Localidad: "" || loc,
  });

  const [errors, setErrors] = useState({
    date: "",
    time: "",
    Propiedades: "",
    Localidad: "",
  });

  useEffect(() => {
    if (!userId) {
      localStorage.removeItem("token");
      navigate("/");
    }
  }, [userId, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTurnData({ ...turnData, [name]: value });

    const error = appointmentValidation({ ...turnData, [name]: value });
    setErrors(error);
  };

  const handleSubmitTurn = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3005/appointments/schedule", {
        ...turnData,
        userId: userId,
      });
      alert("Turno agendado correctamente");
    } catch (error) {
      alert("Error al cargar turno");
    }
  };

  return (
    <DivCustom>
      <FormCustom onSubmit={handleSubmitTurn}>
        <h1>Crear turno</h1>
        <InputCustom>
          <label>Fecha</label>
          <input
            type="date"
            name="date"
            value={turnData.date}
            onChange={handleChange}
          />
          {errors.date && <p>{errors.date}</p>}
        </InputCustom>
        <InputCustom>
          <label>Hora</label>
          <input
            type="time"
            name="time"
            value={turnData.time}
            onChange={handleChange}
          />
          {errors.time && <p>{errors.time}</p>}
        </InputCustom>
        <InputCustom>
          <label>Propiedad</label>
          <input
            type="text"
            name="Propiedades"
            value={turnData.Propiedades}
            onChange={handleChange}
          />
        </InputCustom>
        <InputCustom>
          <label>Localidad</label>
          <input
            type="text"
            name="Localidad"
            value={turnData.Localidad}
            onChange={handleChange}
          />
        </InputCustom>
        <ButtonCustom type="submit">Agregar turno</ButtonCustom>
      </FormCustom>
    </DivCustom>
  );
};

export default CreateAppointment;

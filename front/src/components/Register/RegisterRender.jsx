import { useState } from "react";
import axios from "axios";
import registerValidation from "../../helpers/validate";
import {
  DivCustom,
  DivImg,
  DivInputContainer,
  InputText,
  LabelForm,
  Underline,
  DivForm,
  ErrorMessage,
} from "../Register/RegisterStyles";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    NewEmail: "",
    nDni: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    NewEmail: "",
    nDni: "",
    username: "",
    password: "",
  });

  const [touch, setTouch] = useState({
    name: false,
    NewEmail: false,
    nDni: false,
    username: false,
    password: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      const validationErrors = registerValidation(updatedData);
      setErrors(validationErrors);
      return updatedData;
    });

    setTouch((prevTouch) => ({ ...prevTouch, [name]: true }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      await axios
        .post("http://localhost:3005/users/register", userData)
        .then(() => {
          alert("Registrado con éxito");
        })
        .catch(() => {
          alert("Error al registrar usuario");
        });
    }
  };

  return (
    <div>
      <DivCustom>
        <DivImg>
          <img src="http://res.cloudinary.com/dacebahmf/image/upload/v1725326333/xk9hutcuakhgsxjaso4z.jpg" alt="Casa logo" />
        </DivImg>
        <DivForm>
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <DivInputContainer>
              {touch.name && errors.name && (
                <ErrorMessage className="active">{errors.name}</ErrorMessage>
              )}
              <InputText
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                required
              />
              <LabelForm>Nombre</LabelForm>
              <Underline />
            </DivInputContainer>
            <DivInputContainer>
              {touch.NewEmail && errors.NewEmail && (
                <ErrorMessage className="active">
                  {errors.NewEmail}
                </ErrorMessage>
              )}
              <InputText
                type="email"
                name="NewEmail"
                value={userData.NewEmail}
                onChange={handleChange}
                required
              />
              <LabelForm>Email</LabelForm>
              <Underline />
            </DivInputContainer>
            <DivInputContainer>
              {touch.nDni && errors.nDni && (
                <ErrorMessage className="active">{errors.nDni}</ErrorMessage>
              )}
              <InputText
                type="number"
                name="nDni"
                value={userData.nDni}
                onChange={handleChange}
                required
              />
              <LabelForm>Nro.Dni</LabelForm>
              <Underline />
            </DivInputContainer>
            <DivInputContainer>
              {touch.username && errors.username && (
                <ErrorMessage className="active">
                  {errors.username}
                </ErrorMessage>
              )}
              <InputText
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
                required
              />
              <LabelForm>Nombre de usuario</LabelForm>
              <Underline />
            </DivInputContainer>
            <DivInputContainer>
              {touch.password && errors.password && (
                <ErrorMessage className="active">
                  {errors.password}
                </ErrorMessage>
              )}
              <InputText
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                required
              />
              <LabelForm>Contraseña</LabelForm>
              <Underline />
            </DivInputContainer>
            <button type="submit" disabled={Object.keys(errors).length > 0}>
              Register
            </button>
          </form>
        </DivForm>
      </DivCustom>
    </div>
  );
};
export default Register;

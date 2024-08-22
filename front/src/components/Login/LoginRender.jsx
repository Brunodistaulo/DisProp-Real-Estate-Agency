import { useEffect, useState } from "react";
import axios from "axios";
import loginValidation from "../../helpers/validateLogin";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  DivCustom,
  DivImg,
  DivInputContainer,
  InputText,
  LabelForm,
  Underline,
  DivForm,
  ErrorMessage,
} from "../Login/LoginStyles";

const UserLogin = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      localStorage.removeItem("token");
    }
  }, [user]);

  const [UserLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserLogin({ ...UserLogin, [name]: value });
    console.log(UserLogin);
    const error = loginValidation(UserLogin);
    setErrors(error);
  };

  const handleSubtmit = async (event) => {
    event.preventDefault();
    console.log("entra aqui");
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:3005/users/login",
          UserLogin
        );
        if (response.statusText === "OK") {
          localStorage.setItem("token", response.data.token);
          const token = atob(response.data.token.split(".")[1]);
          const tokenObj = JSON.parse(token);
          const id = tokenObj.id;
          dispatch(addUser({ id }));
          alert("Login successfully");
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        alert("Error Login");
      }
    }
  };

  return (
    <div>
      <DivCustom>
        <DivForm>
          <form onSubmit={handleSubtmit}>
            <h1>Iniciar Sesión</h1>
            <DivInputContainer>
              {errors.username && (
                <ErrorMessage className={errors.username ? "active" : ""}>
                  {errors.username}
                </ErrorMessage>
              )}
              <InputText
                type="email"
                name="username"
                value={UserLogin.username}
                onChange={handleChange}
                required
              />
              <LabelForm>Email</LabelForm>
              <Underline />
            </DivInputContainer>
            <DivInputContainer>
              {errors.password && (
                <ErrorMessage className={errors.password ? "active" : ""}>
                  {errors.password}
                </ErrorMessage>
              )}
              <InputText
                type="password"
                name="password"
                value={UserLogin.password}
                onChange={handleChange}
                required
              />
              <LabelForm>Contraseña</LabelForm>
              <Underline />
            </DivInputContainer>
            <a href="/register">No tienes una cuenta?</a>
            <button type="submit">Iniciar Sesion</button>
          </form>
        </DivForm>
        <DivImg>
          <img src="src/assets/logo/snow-scenery.jpg" alt="Casa logo" />
        </DivImg>
      </DivCustom>
    </div>
  );
};

export default UserLogin;

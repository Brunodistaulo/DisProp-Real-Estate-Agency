import { useState } from 'react';
import axios from 'axios';
import loginValidation  from  '../../helpers/validateLogin';
import {useDispatch} from 'react-redux';
import {addUser} from '../../redux/reducer';
import { useNavigate } from 'react-router-dom';


const UserLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [UserLogin, setUserLogin] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserLogin({...UserLogin, [name]: value});
        const error= loginValidation(UserLogin);
        setErrors(error);
    };

    const handleSubtmit = async (event) => {
        event.preventDefault();
        if(Object.keys(errors).length === 0){
            try {
                const response = await axios.post("http://localhost:3005/users/login", UserLogin);
                if (response.statusText === "OK") {
                    dispatch(dispatch(addUser(response.data)));
                    alert("Login successfully");
                    navigate("/");
                }        
            } catch (error) {
                console.log(error);
                alert("Error Login");
            }
        }
    }


    return (
        <>
           <form onSubmit={handleSubtmit}>
                <label>Usuario</label>
                <input type="text" name="username" value={UserLogin.username} onChange={handleChange}/>
                {errors.username && <p>{errors.username}</p>}
                <label>Contraseña</label>
                <input type="password" name="password" value={UserLogin.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
                <button type="submit">Iniciar Sesion</button>
           </form>
        </>
    )
};

export default UserLogin;
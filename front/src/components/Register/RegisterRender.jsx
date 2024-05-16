import { useState } from "react";
import axios from "axios";
import  registerValidation  from  "../../helpers/validate";

const Register = () => {

    const [userData, setUserData] = useState({name:"", email: "", birthdate: "", nDni: "", username: "", password: ""});

    const [errors, setErrors] = useState({ name: "", email: "", birthdate: "", nDni: "", username: "", password: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserData({...userData, [name]: value});

        const error= registerValidation(userData);
        setErrors(error);
        };
    
    
        
    
    const handleSubtmit= (event) => {
        event.preventDefault();
        if(Object.keys(errors).length === 0){
            axios.post("http://localhost:3000/users/register", userData)
            .then(() => {
                alert ("Register successfully");
            }).catch (() => {
                alert ("Error Register");
            })  
        }   
    }


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubtmit}>
            <div>
                <label>Name: </label>
                <input type="text" name="name" value={userData.name} onChange={handleChange} />
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Email: </label>
                <input type="email" name="email" value={ userData.email} onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Birthdate: </label>
                <input type="date" name="birthdate" value={userData.birthdate} onChange={handleChange} />
                {errors.birthdate && <p>{errors.birthdate}</p>}
            </div>
            <div>
                <label>Nro.Dni: </label>
                <input type="number" name="nDni" value= {userData.nDni} onChange={handleChange} />
                {errors.nDni && <p>{errors.nDni}</p>}
            </div>
            <div>
                <label>Username: </label>
                <input type="text" name="username" value= {userData.username} onChange={handleChange} />
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" value= {userData.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type="submit" disabled={Object.keys(errors).length > 0}>Register</button>

            </form>
        </div>
    );
}
;

export default Register;
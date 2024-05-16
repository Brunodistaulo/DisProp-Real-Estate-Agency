import Home from "./views/Home";
import NavbarRender from "./components/Navbar/NavbarRender";
import MisTurnos from "./views/MisTurnos";
import UserRegister from "./views/Register";
import UserLogin from "./components/Login/LoginRender";
import Appointment from "./views/CreateAppointment";
import About from "./views/About";
import { Routes,Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <NavbarRender/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<UserRegister/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/appointments" element={<MisTurnos/>}/>
        <Route path="/createAppointment" element={<Appointment/>}/>
      </Routes>
    </div>
  );
};

export default App;

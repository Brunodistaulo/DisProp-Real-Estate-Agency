import Home from "./views/Home";
import NavbarRender from "./components/Navbar/NavbarRender";
import MisTurnos from "./views/MisTurnos";
import UserRegister from "./views/Register";
import UserLogin from "./components/Login/LoginRender";
import { Routes,Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <NavbarRender/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<UserRegister/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/appointments" element={<MisTurnos/>}/>
      </Routes>
    </div>
  );
};

export default App;

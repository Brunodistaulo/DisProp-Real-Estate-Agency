import {NavCustom,UlCustom,LiCustom,ACustom,ImgCustom,PNav,} from "./NavbarComponents.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavbarRender = () => {
  const user = useSelector((state) => state.user.id);
  console.log(user)
  return (
    <NavCustom>
      <UlCustom>
        <div>
          <ImgCustom
            src="src/assets/logo-no-background.svg"
            alt="Logo Bussiness"
          />
          <PNav>Disprop</PNav>
        </div>
        <LiCustom>
          <Link to="/">Home</Link>
        </LiCustom>
        <LiCustom>
          <Link to="/about">About</Link>
        </LiCustom>
        {
          user === user && user !== null ? <LiCustom><Link to="/appointments">Mis turnos</Link></LiCustom> : null
        }
        {
          user === user && user !== null ? <LiCustom><Link to="/createAppointment">Crear turno</Link></LiCustom> : null
        }
        {
          user === null ? <LiCustom><Link to="/login">Login</Link></LiCustom> : null
        }
        {
          user === null ? <LiCustom><Link to="/register">Register</Link></LiCustom> : null
        }
      </UlCustom>
    </NavCustom>
  );
};

export default NavbarRender;

import {
  NavCustom,
  UlCustom,
  LiCustom,
  ACustom,
  ImgCustom,
  PNav,
} from "./NavbarComponents.js";
import { Link } from "react-router-dom";
const NavbarRender = () => {
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
        <LiCustom>
          <Link to="/appointments">Mis Turnos</Link>
        </LiCustom>
        <LiCustom>
          <Link to="/login">Login</Link>
        </LiCustom>
        <LiCustom>
          <Link to="/register">Register</Link>
        </LiCustom>
      </UlCustom>
    </NavCustom>
  );
};

export default NavbarRender;

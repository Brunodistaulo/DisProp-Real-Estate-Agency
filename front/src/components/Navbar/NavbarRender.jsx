import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarRender = () => {
  const user = useSelector((state) => state.user.id);

  return (
    <div className="sticky top-0 z-10 bg-transparent bg-gradient-to-b from-black via-transparent via-80% to-transparent">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link className="text-black font-bold" to="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="text-black font-bold" to="/about">
                  Sobre nosotros
                </Link>
              </li>
              {user && (
                <>
                  <li>
                    <Link
                      className="text-black font-bold"
                      to="/createAppointment"
                    >
                      Agendar turno
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black font-bold" to="/appointments">
                      Mis turnos
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl text-white ml-20">
            DisProp
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <Link className="btn btn-ghost text-white font-bold text-lg" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost text-white font-bold text-lg" to="/about">
                Sobre nosotros
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link
                    className="btn btn-ghost text-white font-bold text-lg"
                    to="/createAppointment"
                  >
                    Agendar turno
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn btn-ghost text-white font-bold text-lg"
                    to="/appointments"
                  >
                    Mis turnos
                  </Link>
                </li>
              </>
            )}
            {!user && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost text-white font-bold text-lg"
                >
                  Acceder
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content bg-white rounded-box z-[1] mt-4 w-52 p-2 shadow"
                >
                  <li>
                    <Link className="text-black font-bold" to="/login">
                      Iniciar sesión
                    </Link>
                  </li>
                  <li>
                    <Link className="text-black font-bold" to="/register">
                      Registrarse
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </ul>
        </div>

        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-lg text-white font-bold"
            >
              Acceder
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-white rounded-box z-[1] mt-4 w-52 p-2 shadow"
            >
              <li>
                <Link className="text-black font-bold" to="/login">
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link className="text-black font-bold" to="/register">
                  Registrarse
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarRender;

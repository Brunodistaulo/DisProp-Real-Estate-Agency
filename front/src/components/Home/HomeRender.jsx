import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomeRender = () => {
  const user = useSelector((state) => state.user.id);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      localStorage.removeItem("token");
    }
  }, [user]);

  const handleClick = ( property, loc) => {
    if (user) {
      navigate("/createAppointment", {state: { property, loc } });
      console.log(property, loc);
    }else {
      alert("Debes iniciar sesion para poder agregar un turno");
    }
    ;
  }

  return (
    <>
      <div className="-mt-20 h-96 w-full">
        <div className=" h-full">
          <div className="float-right h-full w-[70%]">
            <img
              src="http://res.cloudinary.com/dacebahmf/image/upload/v1725324843/novfobrz9wmpwgxj4zvj.jpg"
              className="h-full w-full"
              alt="Casa logo"
            />
          </div>
          <div className="absolute w-[450px] ml-52 mt-28 ">
            <p className="bg-white/50 text-3xl font-bold text-slate-900 py-2 text-center">
              Descubre tu espacio ideal, <br /> vive la vida que mereces.
            </p>
            <div className="w-full text-center my-2">
              <button className="btn btn-neutral text-white w-full text-lg">
                ¡Explora Ahora!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-24 my-32">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img className="h-72" src="http://res.cloudinary.com/dacebahmf/image/upload/v1725325974/g29bblmeg6zspeneszeh.jpg" alt="Residencial Vista del Sol" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Residencial Vista del Sol</h2>
            <p className="flex gap-2 items-center text-sm">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 192.00 192.00"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    stroke="#ffffff"
                    stroke-width="5.76"
                    d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z"
                  ></path>
                  <circle
                    cx="96"
                    cy="74"
                    r="20"
                    stroke="#ffffff"
                    stroke-width="5.76"
                  ></circle>
                </g>
              </svg>
              San Isidro, Buenos Aires, Argentina
            </p>
            <p className="text-white pb-8 text-lg text-left">
              Moderna propiedad con 4 dormitorios, 3 baños, piscina privada y
              seguridad las 24 horas, ideal para familias.
            </p>
            <div className="card-actions justify-end">
              <button
              onClick={() => handleClick("Residencial Vista del Sol", "San Isidro, Buenos Aires, Argentina") }
              className="btn btn-neutral text-lg">Agendar turno</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img className="h-72" src="http://res.cloudinary.com/dacebahmf/image/upload/v1725326013/if9zmrjfbmmigbzqcl36.webp" alt="Condominio Brisas del Mar" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Condominio Brisas del Mar</h2>
            <p className="flex gap-2 items-center text-sm">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 192.00 192.00"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    stroke="#ffffff"
                    stroke-width="5.76"
                    d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z"
                  ></path>
                  <circle
                    cx="96"
                    cy="74"
                    r="20"
                    stroke="#ffffff"
                    stroke-width="5.76"
                  ></circle>
                </g>
              </svg>
              Viña del Mar, Valparaíso, Chile
            </p>
            <p className="text-white pb-8 text-lg text-left">
              Lujoso condominio con vistas al mar, 2 dormitorios, 2 baños y
              acceso directo a la playa
            </p>
            <div className="card-actions justify-end">
              <button
              onClick={()=>handleClick("Condominio Brisas del Mar", "Viña del Mar, Valparaíso, Chile") }
              className="btn btn-neutral text-lg">Agendar turno</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img className="h-72" src="http://res.cloudinary.com/dacebahmf/image/upload/v1725326044/fqm9teeoqqvgqvrotjvk.jpg" alt="Hacienda Los Robles" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Hacienda Los Robles</h2>
            <p className="flex gap-2 items-center text-sm">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 192.00 192.00"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    stroke="#ffffff"
                    stroke-width="5.76"
                    d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z"
                  ></path>
                  <circle
                    cx="96"
                    cy="74"
                    r="20"
                    stroke="#ffffff"
                    stroke-width="5.76"
                  ></circle>
                </g>
              </svg>
              Valle de Guadalupe, Baja California, México
            </p>
            <p className="text-white pb-8 text-lg text-left">
              Encantadora hacienda con 5 habitaciones, viñedo privado y vistas
              espectaculares.
            </p>
            <div className="card-actions justify-end">
              <button 
              onClick={()=>handleClick("Hacienda Los Robles", "Valle de Guadalupe, Baja California, Mexico") }
              className="btn btn-neutral text-lg">Agendar turno</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRender;

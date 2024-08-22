import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AboutContainer, Title, Description, Highlight } from "./AboutStyles";

const AboutRender = () => {
  const user = useSelector((state) => state.user.id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      localStorage.removeItem("token");
      console.log(user);
    }
  }, [user]);

  return (
    <AboutContainer>
      <Title>Sobre Disprop</Title>
      <Description>
        Bienvenido a <Highlight>Disprop</Highlight>, tu aliado en el mercado
        inmobiliario. Nos especializamos en ofrecer una plataforma intuitiva y
        eficiente para agendar turnos, permitiéndote gestionar citas con
        nuestros agentes de manera rápida y sencilla.
      </Description>
      <Description>
        Nuestra misión es facilitar el proceso de búsqueda y adquisición de
        propiedades, brindando un servicio personalizado que se adapta a tus
        necesidades. Ya sea que estés buscando comprar, vender o alquilar una
        propiedad, <Highlight>Disprop</Highlight> está aquí para acompañarte en
        cada paso del camino.
      </Description>
      <Description>
        ¡Confía en nosotros para hacer de tu experiencia inmobiliaria algo
        simple y efectivo!
      </Description>
    </AboutContainer>
  );
};
export default AboutRender;

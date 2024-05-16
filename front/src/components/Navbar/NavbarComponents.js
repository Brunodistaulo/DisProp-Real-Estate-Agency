import styled from "styled-components";

export const NavCustom = styled.nav`
  width: 100%;
  height: 55px;
  background: rgb(255, 255, 255);
  z-index: 1000;
`;

export const UlCustom = styled.ul`
margin: 0;
padding: 0;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;
export const LiCustom = styled.li`
  list-style: none;
  align-items: center;

  font-size: 15px;
  display: flex;
  justify-content: space-around;
`;

export const ACustom = styled.a`
  text-decoration: none;
  padding: 15px;
  font-weight: 500;
  color: rgb(0, 0, 0);
  transition: all .3s ease-in-out;
  border-bottom: 2px solid transparent;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.15),rgba(14, 14, 14, 0));
    border-bottom: 2px solid rgba(0, 0, 0, 0.7);
  }
`;

export const ImgCustom = styled.img`
  position: absolute;
  left: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const PNav = styled.p`
  text-transform: uppercase;
  margin: 10px 0 0 -30px;
  font-weight: 900;
  font-size: 20px;
`;

// .navBarEncabezada{
//   margin-top: -60px;
//   /* background-color: #141414; */
//   background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8),rgba(14, 14, 14, 0));
//   position: fixed;
//   height: 60px;
//   width: 100%;
//   z-index: 1000;

// }
// .navBarEncabezada ul {
//   height: 100%;
//   align-items: center;
//   display: flex;
//   justify-content: space-around;
// }

// .navBarEncabezada a {
//   text-decoration: none;
//   height: 100%;
//   transition: all 0.3s ease-in-out;
//   color: #e7edf6;
// }
// #logotipo {
//   font-size: 35px;
// }
// #logotipo h3 {
//   text-shadow: 0px 0px 15px white;
//   cursor: default;
// }
// .navBarEncabezada li {
//   list-style: none;
//   font-size: 20px;
// }

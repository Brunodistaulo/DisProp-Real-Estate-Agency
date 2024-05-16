import styled from "styled-components";

export const DivTurn = styled.div`
  max-width: 20rem;
  width: 100%;
  cursor: pointer;
  position: relative;
  display: block;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ArticlePreview = styled.div`
  padding: 1.5rem;
  background: white;
`;

export const Titles = styled.h3`
  color: #2c2c2c;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
  transition: color 0.3s ease-out;
`;

export const ImgTurn = styled.img`
  max-width: 100%;
  transform-origin: center;
  transition: transform 0.4s ease-in-out;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  &:hover {
    transform: scale(1.5);
  }
`;

export const Figure = styled.figure`
  margin: 0;
  width: 100%;
  height: 14rem;
  overflow: hidden;
`;

export const CancelButton = styled.button`
  height: 2rem;
  border: none;
  box-shadow: 0 0 0 0 #f4bd50;
  outline: 1.5px solid;
  cursor: pointer;
  font-size: 0.7rem;
  max-width: 210px;
  width: 100%;
  letter-spacing: 0.2rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: all .4s cubic-bezier(0.36, 0.63, 0.5, 0.73);
  &:hover {
    box-shadow: 0 0 0 2px #f4bd50;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    color: #f4bd50;
  }
`;

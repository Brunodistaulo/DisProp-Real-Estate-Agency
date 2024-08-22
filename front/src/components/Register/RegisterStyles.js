import styled from "styled-components";

export const DivCustom = styled.div`
  margin-top: -80px;
  height: 100vh;
  display: flex;
`;

export const DivForm = styled.div`
  min-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    margin-top: 40px;
    background: #fff;
    width: 450px;
    border-radius: 10px;
    height: 620px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 32px;
      color: black;
      font-weight: 500;
      letter-spacing: 6px;
    }

    button {
      padding: 0.7em 2em;
      border: none;
      font-weight: bold;
      letter-spacing: 5px;
      text-transform: uppercase;
      cursor: pointer;
      color: black;
      transition: all 0.9s;
      font-size: 15px;
      position: relative;
      overflow: hidden;
      outline: 2px solid black;
    }

    button:hover {
      color: #ffffff;
      transform: scale(1);
    }

    button::before {
      content: "";
      position: absolute;
      left: -50px;
      top: 0;
      width: 0;
      height: 105%;
      background-color: black;
      transform: skewX(45deg);
      z-index: -1;
      transition: width 1400ms;
    }

    button:hover::before {
      width: 250%;
    }
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  position: absolute;
  background: #e7e7e7;
  color: red;
  padding: 5px;
  border-radius: 8px 0px 0px 8px;
  font-weight: 500;
  margin-left: -190px;
  display: none;

  &.active {
    display: block;
  }
  &::after,
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 15px 15px 15px;
    border-color: transparent transparent transparent #e7e7e7;
    top: 0px;
    right: -28px;
  }
`;


export const DivImg = styled.div`
  width: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
export const DivInputContainer = styled.div`
  position: relative;
  margin: 35px auto;
  width: 200px;
`;

export const InputText = styled.input`
  font-size: 16px;
  color: black;
  width: 100%;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  /* padding: 5px 0; */
  background-color: transparent;
  outline: none;

  &:focus ~ label,
  &:valid ~ label {
    top: -20px;
    font-size: 16px;
    color: black;
  }

  &:focus ~ div,
  &:valid ~ div {
    transform: scaleX(1);
  }
`;

export const LabelForm = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  pointer-events: none;
`;

export const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: black;
  transform: scaleX(0);
  transition: all 0.3s ease;
`;

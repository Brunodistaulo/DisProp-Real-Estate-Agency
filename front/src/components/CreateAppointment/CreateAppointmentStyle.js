import styled from "styled-components";


export const DivCustom = styled.div`
    width: 60%;
    border-radius: 1rem;
    height: 400px;
    margin: 60px auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    text-align: center;
`;

export const FormCustom = styled.form`
    height: 280px;
    line-height: 6;
    padding: 10px;
    margin: 10px;
`;

export const ButtonCustom = styled.button`
    cursor: pointer;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.2rem;
    font-weight: 600;
    text-transform: uppercase;
    transition: all .7s;
    &:hover {
        background-color: grey;
        color: white;
        outline: none;
        border: none;
        border-radius: 0.2rem;
    }
`;

export const InputCustom = styled.input`
    height: 1rem;
    border-radius: 0.5rem;
    margin: 0 10%;
    padding: 10px;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
`;


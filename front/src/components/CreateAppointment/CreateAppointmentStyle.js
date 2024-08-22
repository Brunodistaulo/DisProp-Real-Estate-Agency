import styled from "styled-components";


export const DivCustom = styled.div`
    width: 60%;
    border-radius: 1rem;
    height: 520px;
    margin: 0px auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    text-align: center;
`;

export const FormCustom = styled.form`
    height: 280px;
    display: grid;
    grid-template-columns: 1fr ;
    gap: 1rem;

    h1{
        margin: 1rem 0;
        font-size: 1.5rem;
        letter-spacing: 0.2rem;
        font-weight: 600;
        text-transform: uppercase;
    }
`;

export const ButtonCustom = styled.button`
    cursor: pointer;
    background-color: white;
    color: black;
    border-radius: 0.3rem;
    font-size: 1rem;
    line-height: 1.5rem;
    width: 25%;
    margin: 1.5rem auto 0 auto;
    padding: 0.5rem 0;
    letter-spacing: 0.1rem;
    font-weight: 600;
    text-transform: uppercase;
    transition: all .5s;
    &:hover {
        background-color: #2c2c2c;
        color: white;
        outline: none;
        border: none;
        border-radius: 0.3rem;
    }
`;

export const InputCustom = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.2rem;
    width: 50%;
    margin: 0 auto;
    
    label {
        font-size: 1rem;
        text-align: left;
        line-height: 1.5rem;
        letter-spacing: 0.1rem;
        font-weight: 600;
        text-transform: uppercase;
    }

    input {
        width: 100%;
        margin: 0 auto;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        border: 1px solid #ccc;
        border-radius: 0.2rem;
        padding: 0.5rem;
    }
`;


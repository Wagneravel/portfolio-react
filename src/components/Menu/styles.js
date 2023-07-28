import styled from "styled-components";

export const ContainerMenu = styled.details`
    display: flex;
    font-family: 'Poppins', sans-serif;
    
    @media only screen and (max-width: 600px) {
    }
`
export const Summary = styled.summary`
    list-style-type: '';
    cursor: pointer;
    font-size: 15px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: .2rem;

    @media screen and (min-width: 700px) and (max-width: 1240px) {
    }
`
export const Item = styled.li`
    list-style: none;
    text-align: center;
`
export const Link = styled.a`
    font-size: 14px;
    text-decoration: none;
    color: #000000;
    
    :hover{
        color: rgb(211, 0, 95);
    }

    @media screen and (min-width: 700px) and (max-width: 1240px) {
    }
`
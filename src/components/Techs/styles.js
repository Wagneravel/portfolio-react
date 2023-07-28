import styled from "styled-components";

export const ContainerTechs = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  letter-spacing: 0.1rem;
  margin: 0 auto;
  margin-top: 80px;
  width: 90%;

  @media only screen and (max-width: 600px) {
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
  }
`;
export const ItemList = styled.li`
  list-style: none;
`;


export const NameTech = styled.span`
  display: none;
  color: #bab8b5;
  font-size: 0.7em;

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    font-size: 1em;
  }
`;


export const ImgTech = styled.img`
  width: 50px;
  margin: 10px;
  order: 1;
  margin-top: 10px;

  :hover ~ ${NameTech} {
    display: block;
    z-index: -1;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
  }
`;
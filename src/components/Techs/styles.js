import styled from "styled-components";

export const ContainerTechs = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  letter-spacing: 0.1rem;
  margin: 0 auto;
  margin-top: 80px;
  width: 90%;
  box-sizing: border-box;

  @media only screen and (max-width: 600px) {
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
  }
`;
export const ItemList = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const NameTech = styled.span`
  display: none;
  color: #bab8b5;
  font-size: 11px;

  @media screen and (min-width: 700px) and (max-width: 1240px) {
  }
`;


export const ImgTech = styled.img`
  width: 50px;
  margin: 10px;
  order: 1;
  margin-top: 10px;
  box-sizing: border-box;

  :hover ~ ${NameTech} {
    display: block;
    z-index: -1;
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
  }
`;

// height: 100px;
//     display: flex;
//     align-items: center;
//     justify-content: space-evenly;
//     flex-direction: row;
//     width: 90%;
//     box-sizing: border-box;
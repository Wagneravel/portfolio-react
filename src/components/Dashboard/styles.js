import styled from "styled-components";

export const ContainerDashboard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Poppins", sans-serif;
  height: 120%;
  margin-top: 60px;
  

  @media only screen and (max-width: 600px) {
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
  }
`;
export const BoxResume = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;

  @media only screen and (max-width: 600px) {
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    
  }
`;
export const Name = styled.span`
  letter-spacing: 0.5rem;
  color: grey;
  text-transform: uppercase;
  font-size: 15px;

  @media only screen and (max-width: 600px) {
    
  }
`;
export const Description = styled.p`
  color: rgb(169, 169, 169);
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-align: justify;
  line-height: 1.3;
  font-size: 13px;
  @media only screen and (max-width: 600px) {
    
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
   
  }
`;
export const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;

  @media only screen and (max-width: 600px) {
    
  }
`;
export const BoxLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;

  @media only screen and (max-width: 600px) {
    
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    
  }
`;
export const Link = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  

  :hover {
    color: #000;
    font-weight: bold;
    background-color: #007bff;
  }

  @media only screen and (max-width: 600px) {
    
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
  }
`;
export const Photo = styled.img`
  filter: grayscale(80%);
  width: 500px;
  height: 500px;
  border-radius: 100px;
  box-shadow: 5px 5px 23px 5px rgba(0, 0, 0, 0.49);

  :hover {
    filter: grayscale(0);
  }

  @media only screen and (max-width: 600px) {
   
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    
  }
`;

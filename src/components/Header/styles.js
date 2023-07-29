import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-family: "Poppins", sans-serif;
  height: 120px;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    gap: 5px;
  }
  @media screen and (min-width: 700px) and (max-width: 1100px) {
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.span`
  font-size: 19px;
  font-weight: bold;

  @media only screen and (max-width: 500px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 20px;
  }
`;
export const Sub = styled.span`
  font-size: 12px;
  letter-spacing: 0.1rem;

  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 13px;
  }
`;

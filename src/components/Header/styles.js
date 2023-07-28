import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  font-family: "Poppins", sans-serif;
  height: 120px;

  @media only screen and (max-width: 600px) {
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

  @media screen and (min-width: 700px) and (max-width: 1240px) {
  }
`;
export const Sub = styled.span`
  font-size: 12px;
  letter-spacing: 0.1rem;

  @media screen and (min-width: 700px) and (max-width: 1240px) {
  }
`;

import styled from "styled-components";

export const ContainerProjects = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  letter-spacing: 0.1rem;
  margin: 0 auto;
  padding: 10px;
  margin-top: 5em;
  

  @media only screen and (max-width: 600px) {
    
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    
  }
`;
export const Title = styled.h2`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 1rem;

  @media only screen and (max-width: 600px) {
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
  }
`;
export const List = styled.ol`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 150px;
  margin-top: 40px;
  overflow-x: scroll;
  gap: 15px;

  @media only screen and (max-width: 600px) {
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
    
  }
`;
export const Li = styled.li`
    @media only screen and (max-width: 600px) {
    }
`


export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 300px;
  justify-content: center;
  align-items: center;
  height: 260px;

  @media screen and (min-width: 700px) and (max-width: 1240px) {
  
  }
`;
export const Title2 = styled.span`
  font-weight: bold;

  @media screen and (min-width: 700px) and (max-width: 1240px) {
  }
`;
export const Img = styled.img`
  border: 1px solid rgb(214, 214, 214);
  width: 100%;
  border-radius: 10px;
  filter: grayscale(1);
  height: 260px;

  :hover {
    filter: grayscale(0);
  }

  @media only screen and (max-width: 600px) {
    
  }
`;
export const ImgGh = styled.img`
  width: 20px;
  margin-right: 5px;
`;
export const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.9em;
`;
export const Link = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: rgb(211, 0, 95);
  cursor: pointer;
  display: flex;
  align-items: center;

  :hover {
    color: #000;
    font-weight: 600;
  }

  @media only screen and (max-width: 600px) {
   
  }

  @media screen and (min-width: 700px) and (max-width: 1240px) {
  }
`;
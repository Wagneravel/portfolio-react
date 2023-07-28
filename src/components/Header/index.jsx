import { HeaderContainer, Box, Logo, BoxTitle, Name, Sub } from "./styles.js";

import { Menu } from "../Menu/index.jsx";

import logo from "../../assets/img/code-solid.svg"
import { Contact } from "../Contact/index.jsx";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Box>
          <Logo src={logo} alt="Logo" />
          <BoxTitle>
            <Name>Wagner Avelino</Name>
            <Sub>Dev Web full stack</Sub>
          </BoxTitle>
          
        </Box>
        <Contact />
      </HeaderContainer>
    </>
  );
};

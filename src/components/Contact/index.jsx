import LinkedIn from "../../assets/img/linkedin-in.svg";
import Email from "../../assets/img/envelope-solid.svg";
import Wpp from "../../assets/img/whatsapp.svg";

import { ContainerContact, BoxContact, Img } from "./styles.js";

export const Contact = () => {
  return (
    <>
      <ContainerContact>
        <BoxContact>
          <a href="https://www.linkedin.com/in/wagneravelino/" target="_blank" className="link-contact">
            <Img src={LinkedIn} />
          </a>
          <a href="mailto:wavelino@gmail.com" title="" target="_blank" className="link-contact">
            <Img src={Email} />
          </a>
          <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5522999889631" target="_blank" className="link-contact">
            <Img src={Wpp} />
          </a>
        </BoxContact>
      </ContainerContact>
    </>
  );
};

import photo from "../../assets/img/wagnerr-fotor-bg-remover-2023032081534.png";

import { Header } from "../Header";

import { ContainerDashboard, BoxResume, Name, Title, Description, BoxLinks, Link, Photo } from "./styles.js";

const my = {
  name: "Wagner Avelino",
  Title: "Desenvolvedor Web full stack Javascript",
  Description: "Sou Wagner Avelino, desenvolvedor web Full Stack formado pela Kenzie Academy, com expertise em JavaScript, TypeScript, React e Node.js. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas, com previsão de formatura em junho de 2025. Com experiência em projetos freelancers, busco novas oportunidades para contribuir em projetos inovadores e fazer parte de uma equipe apaixonada por tecnologia."
}

export const Dashboard = () => {
  return (
    <>
      <Header />
      <ContainerDashboard>
        <BoxResume>
          <Name>{my.name}</Name>
          <Title>{my.Title}</Title>
          <Description>
            {my.Description}
          </Description>
          
          <BoxLinks>
            <Link href="#h2" className="link">
              Projetos
            </Link>
            <Link href="https://github.com/Wagneravel" target="_blank" className="link">
              GitHub
            </Link>
            <Link href="https://drive.google.com/file/d/1959bpWvtk0YAwJZ_sL-7I5rur9G6-8bu/view?usp=drive_link" target="_blank" className="link">
              Currículo
            </Link>
          </BoxLinks>
        </BoxResume>
        <Photo className="box-img" src={photo} alt="Foto" />
      </ContainerDashboard>
    </>
  );
};

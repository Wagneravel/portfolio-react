import photo from "../../assets/img/wagnerr-fotor-bg-remover-2023032081534.png";

import { Header } from "../Header";

import { ContainerDashboard, BoxResume, Name, Title, Description, BoxLinks, Link, Photo } from "./styles.js";

const my = {
  name: "Wagner Avelino",
  Title: "Desenvolvedor Web full stack Javascript",
  Description: "Sou Wagner Avelino, um desenvolvedor web apaixonado e em constante evolução na área. Minha jornada começou com a formação na renomada Kenzie Academy como Desenvolvedor Web Full Stack, onde aprimorei minhas habilidades em JavaScript, TypeScript, React e Node.js. Atualmente, estou empenhado em ampliar meus conhecimentos acadêmicos, cursando Análise e Desenvolvimento de Sistemas, com previsão de formatura em junho de 2025. Ao longo do caminho, tive a oportunidade de trabalhar em projetos freelancers, o que me proporcionou experiência prática e fortaleceu meu portfólio. Sou movido por desafios e estou sempre em busca de soluções criativas para problemas complexos. Comprometido com a excelência no desenvolvimento de software, estou aberto a novas oportunidades para contribuir em projetos inovadores e fazer parte de uma equipe apaixonada por tecnologia."
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

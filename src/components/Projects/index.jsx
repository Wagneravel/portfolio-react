import booktok from "../../assets/img/booktok.png"
import burger from "../../assets/img/Hamburger.png"
import { ItemList, Title, Img, ImgGh, Links, Link } from "./styles.js";
import { ContainerProjects, Title2, List, Li } from "./styles.js"
import GHIcon from "../../assets/img/github.svg";
import imgV from "../../assets/img/vercelImg.png";

export const Projects = () => {

  const projectsList = [
    {
      title: "Hamburgueria",
      img: burger,
      link: "https://hamburgueria-v2-wagneravel.vercel.app/",
      gh: "https://github.com/Wagneravel/frontend-hamburgueria"
    },
    {
      title: "E-booktok",
      img: booktok,
      link: "https://booktok.vercel.app/",
      gh: "https://github.com/Wagneravel/booktok"
    },
    // {
      //   title: "Kenzie Shop",
      //   img: ksproject,
      //   link: "https://react-entrega-s3-kenzishop-com-context-api-barbaracintr.vercel.app",
      //   gh: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzishop-com-context-api-barbaracintr"
      // },
      // {
      //   title: "Kenzie Shop",
      //   img: ksproject,
      //   link: "https://react-entrega-s3-kenzishop-com-context-api-barbaracintr.vercel.app",
      //   gh: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzishop-com-context-api-barbaracintr"
      // },
    ];

  return (
    <>
      <ContainerProjects>
        <Title id="h2">Meus Projetos</Title>
         <List>
          {projectsList.map((project, index) => (
            <Li key={index}>
            <ItemList>
            <Title2>{project.title}</Title2>
            <Img src={project.img} />
            <Links>
              <Link href={project.gh} target="_blank">
                <ImgGh src={GHIcon} />
                GitHub Code
              </Link>
              <Link href={project.link} target="_blank">
                <ImgGh src={imgV} />
                Aplicação
              </Link>
            </Links>
          </ItemList>
            </Li>
          ))}
        </List>
      </ContainerProjects>
    </>
  );
};

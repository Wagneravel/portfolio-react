
import CSS3 from "../../assets/img/css3.svg";
import ReactJS from "../../assets/img/react.svg";
import JS from "../../assets/img/js.svg";
import HTML5 from "../../assets/img/html5.svg";
import TS from "../../assets/img/typescript.png";
import imgNode from "../../assets/img/node_js_icon_198062.png";

import FaGit from "../../assets/img/git_original_wordmark_logo_icon_146510.png";
import DiDjango from "../../assets/img/prog-django_icon-icons.com_50802.png";
import FaPython from "../../assets/img/Python_icon-icons.com_68975.png";
import FaDocker from "../../assets/img/docker_icon_138669.png";


import { ContainerTechs, ItemList , NameTech, ImgTech } from "./styles.js"




export const Techs = () => {
  const techsList = [
    {
      name: "ReactJS",
      img: ReactJS,
    },
    {
      name: "JavaScript",
      img: JS,
    },
    {
      name: "TypeScript",
      img: TS,
    },
    {
      name: "HTML5",
      img: HTML5,
    },
    {
      name: "CSS3",
      img: CSS3,
    },
    {
      name: "NodeJS",
      img: imgNode,
    },
    { 
      name: "Python",
      img: FaPython, 
    },
    { 
      name: "Django",
      img: DiDjango, 
    },
    { 
      name: "Git", 
      img: FaGit, 
    },
    { 
      name: "Docker",
      img: FaDocker, 
    },
  ];

  return (
    <>
        <ContainerTechs>
          {techsList.map((tech, index) => {
            return (
              <ItemList key={index}>
                  <ImgTech src={tech.img} />
                  <NameTech>{tech.name}</NameTech>
              </ItemList>
            );
          })}
        </ContainerTechs>

        
        
    </>
  );
};



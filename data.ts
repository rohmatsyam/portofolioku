import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import {IProject, IService, ISkill} from "./types";
import {BsCircleFill} from 'react-icons/bs'

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages:ISkill[] = [
  {
    name:"Javascript",
    level:"95",
    Icon:BsCircleFill
  },  
  {
    name:"PHP",
    level:"92",
    Icon:BsCircleFill
  },
  {
    name:"Java",
    level:"80",
    Icon:BsCircleFill
  },
  {
    name:"Python",
    level:"85",
    Icon:BsCircleFill
  }  
]

export const tools:ISkill[] = [
  {
    name:"VSCode",
    level:"85",
    Icon:BsCircleFill
  },
  {
    name:"Figma",
    level:"90",
    Icon:BsCircleFill
  },
  {
    name:"Docker",
    level:"80",
    Icon:BsCircleFill
  },
  {
    name:"Photoshop",
    level:"85",
    Icon:BsCircleFill
  },
]

export const projects:IProject[] = [
  {
    id:1,
    name: "Github Finder",
    description: "Search github user by username",
    image_path:'/img/projects/github-finder.jpg',
    deployed_url:'https://rohmatsyam.github.io/github-finder/',
    github_url:'https://github.com/rohmatsyam/github-finder',
    category:['react'],
    key_techs:['React']
  }  
]
import { IconType } from "react-icons/lib";

export interface IService{    
    title:string
    about:string
    Icon:IconType    
}

export interface ISkill{
    name:string
    level:string
    Icon:IconType
}

export interface IProject{
    id:number,
    name:string,
    descriptions:string,
    image:{
        fields:{
            file:{
                url:string
            }
        }
    },
    deployedUrl:string,
    githubUrl:string,
    category:Category[],
    keyTechs:string[]
}

export type Category = "react" | "node" | "express" | 'mongo';
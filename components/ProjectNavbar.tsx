import { FunctionComponent } from "react"
import { Category } from "../types"

export const NavItem:FunctionComponent<{value:Category|'all',hanldlerFilterCategory:Function,active:string}> = ({value,hanldlerFilterCategory,active}) => {
    let className = "capitalize cursor-pointer hover:text-green";
    if(active === value){
        className += " text-green"
    }
    return (
        <li className={className} onClick={()=>hanldlerFilterCategory(value)}>{value}</li>
    )
}

const ProjectNavbar:FunctionComponent<{hanldlerFilterCategory:Function,active:string}> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-auto list-none">
            <NavItem value="all" {...props}/>            
            <NavItem value="react" {...props}/>            
            <NavItem value="node" {...props}/>            
            <NavItem value="mongo" {...props}/>            
            <NavItem value="express" {...props}/>                        
        </div>
    )
}

export default ProjectNavbar

import { Link } from "react-router-dom"


const Bottom = ({para,link,path})=>{
    return <div className="flex justify-center m-8">
         <p className="text-sm font-bold">{para}? <Link className="underline" to={path} >{link}</Link></p>
    </div>

}

export default Bottom;
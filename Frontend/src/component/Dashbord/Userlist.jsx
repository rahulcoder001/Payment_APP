
import { useNavigate } from "react-router-dom";

const Userlist = ({user})=>{
    const navigate  = useNavigate();
     return <div>
            <div className="flex justify-between ml-5 mr-3 mt-3" key={user.id}>
                <div className="flex p-2">
                <div className=" p-1 w-8 flex justify-center items-center rounded-full bg-slate-300">{user.name[0]}</div>
                <p className="ml-2 mt-1 font-bold">{user.name}  {user.lastname}</p>
                </div>
                <div className="flex">
                    <button onClick={()=>{
                        navigate("/send?id=" + user.id+"&name=" + user.name)
                    }} className=" mt-1 mb-1 text-sm font-bold text-white bg-black p-2 rounded-md">Send Money</button>
                </div>
            </div>
     </div>



}

export default Userlist;
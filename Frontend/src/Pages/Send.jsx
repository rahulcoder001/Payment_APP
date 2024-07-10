import Heading from "../component/Auth/Headingcomponent";
import Amount from "../component/Send/Amount";
import Name from "../component/Send/Name";
import Sendbutton from "../component/Send/Sendbutton";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export function Send(){
     const [searchparams] = useSearchParams();
     const [amount,setAmount] = useState(0);
     const id=searchparams.get('id');
     const name=searchparams.get('name');
     const navigate = useNavigate();
     async function tranfer(){
       const response = await axios.post("http://localhost:3000/api/v1/account/transection",{
         to:id,
         amount
       },{
        headers:{
          Authorization:"Bearer "+ localStorage.getItem("token")
        }
       })
       navigate("/dashbord");
     }
      return <div className="bg-slate-300 flex justify-center items-center h-screen w-full">
        <div className="w-1/3 bg-white">
        <div className="m-3 ml-10">
            <Heading title={"Send Money"}/>
            <Name name={name}/>
            <Amount onchange={(e)=>{setAmount(e.target.value)}}/>
            <Sendbutton onpress={tranfer}/>
        </div>
        </div>
      </div>
}
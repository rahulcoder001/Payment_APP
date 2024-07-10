import { useState } from "react";
import Bottom from "../component/Auth/Bottomwarning";
import Buttom from "../component/Auth/Buttoncomponent";
import Heading from "../component/Auth/Headingcomponent";
import Input from "../component/Auth/Inputcomponent";
import Subheading from "../component/Auth/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Signup(){
    const [name,setName] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    async function signup(){
        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
            name,
            lastname,
            email,
            password
        })
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/dashbord")
    }
    return <div className=" h-screen w-full flex justify-center items-center bg-slate-500">
        <div className=" w-1/4 bg-white rounded-md">
        <Heading title={"Sign UP"}/>
        <Subheading para={"Enter your detail's to create an account"}/>
        <Input title={"First Name"} onchange={(e)=>{setName(e.target.value)}} id={"1"}/>
        <Input title={"Last Name"} onchange={(e)=>{setLastname(e.target.value)}} id={"2"}/>
        <Input title={"Email"} onchange={(e)=>{setEmail(e.target.value)}} id={"3"}/>
        <Input title={"Password"} onchange={(e)=>{setPassword(e.target.value)}} id={"4"}/>
        <Buttom onpress={signup} title={"Sign up"}/>
        <Bottom  para={"Already have an account"} path={"/signin"} link={"Sign in"}/>
        </div>
    </div>
}                             
import { useState } from "react";
import Bottom from "../component/Auth/Bottomwarning";
import Buttom from "../component/Auth/Buttoncomponent";
import Heading from "../component/Auth/Headingcomponent";
import Input from "../component/Auth/Inputcomponent";
import Subheading from "../component/Auth/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Signin(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    async function signin(){
        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
            email,
            password
        })
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/dashbord")
    }

    return <div className="h-screen w-full flex justify-center items-center bg-slate-500">
    <div className="w-1/4 bg-white rounded-md p-5">
    <Heading title={"Sign IN"}/>
        <Subheading para={"Enter your detail's to Login in an account"}/>
        <Input title={"Email"} onchange={(e)=>{setEmail(e.target.value)}} id={"3"}/>
        <Input title={"Password"} onchange={(e)=>{setPassword(e.target.value)}} id={"4"}/>
        <Buttom onpress={signin} title={"Sign in"}/>
        <Bottom  para={"Did not have an account"} path={"/signup"} link={"Sign up"}/>
    </div>
</div>
}                             
import TopBarLogin from "../components/topbar/TopBarLogin";
import {RegistrationWrapper} from "../components/topbar/BarWrapper.style"
import {Subtitle, Text} from "../components/topbar/Title.style"
import { FormWrapper, Form, FormDiv, FormLabel, FormInput, FormButton } from "../components/forms/Forms.style";
import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const UserLogin = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage]= useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post("http://localhost:8000/api/users/login", {
            email: email,
            password: password,
        },{ withCredentials: true})
        .then((res)=>{
            console.log(res, "is res");
            console.log(res.data, "is res.data!");
            navigate("/devs/skills/languages");
        })
        .catch((err)=>{
            console.log(err.response.data);
            setErrorMessage(err.response.data.message)
        })
    }

    return(
        <FormWrapper>
            <TopBarLogin></TopBarLogin>
            <RegistrationWrapper>
               <Subtitle marginBottom="0px">Welcome Back, Developer!</Subtitle>
               <Text>Let's Connect You To A Job!</Text>
               <Form onSubmit={handleSubmit}>
                    <FormDiv>
                        <FormLabel>Email</FormLabel>
                        <FormInput type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Password</FormLabel>
                        <FormInput type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </FormDiv>
                    {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
                    <FormButton type="submit">Login</FormButton>
               </Form>
            </RegistrationWrapper>
        </FormWrapper>
    )
}

export default UserLogin;
import TopBarRegistration from "../components/topbar/TopBarRegistration";
import {RegistrationWrapper} from "../components/topbar/BarWrapper.style"
import {Subtitle} from "../components/topbar/Title.style"
import { FormWrapper, Form, FormDiv, FormLabel, FormInput, FormSelect, FormButton } from "../components/forms/Forms.style";
import {ContentLinks} from "../components/topbar/MenuOptions.style"
import {Link} from "react-router-dom";
import React, {useState} from 'react';
import axios from "axios";

const UserRegistration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity]= useState("");
    const [state, setState] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword]= useState("");
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState({});
    const [confirmReg, setConfirmReg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post("http://localhost:8000/api/users/register",{
            firstName,
            lastName,
            email,
            address,
            city,
            state,
            password,
            confirmPassword
        },{withCredentials:true})
        .then(res => {
            console.log(res.data);
            setFirstName("");
            setLastName("");
            setEmail("");
            setAddress("");
            setCity("");
            setState("");
            setPassword("");
            setConfirmPassword("");
            setUsers([...users, res.data]);
            setConfirmReg("Thank you for Registering. You can now Log In!");
            setErrors({});
        })
        .catch(err=> {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
    }

    return(
        <FormWrapper>
            <TopBarRegistration></TopBarRegistration>
            <RegistrationWrapper>
               <Subtitle fontSize="xx-large">Developer Registration</Subtitle>
               <Form onSubmit={handleSubmit}>
                   <FormDiv>
                        <FormLabel>First Name</FormLabel>
                        <FormInput type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                        <FormLabel>Last Name</FormLabel>
                        <FormInput type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                    </FormDiv>
                    {errors.firstName && <p style={{color:"red"}}>{errors.firstName.message}.</p>}
                    {errors.lastName && <p style={{color:"red"}}>{errors.lastName.message}.</p>}
                    <FormDiv>
                        <FormLabel>Email</FormLabel>
                        <FormInput type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </FormDiv>
                    {errors.email && <p style={{color:"red"}}>{errors.email.message}.</p>}
                    <FormDiv>
                        <FormLabel>Address</FormLabel>
                        <FormInput type="text" value={address} onChange={(e)=>setAddress(e.target.value)} />
                    </FormDiv>
                    {errors.address && <p style={{color:"red"}}>{errors.address.message}.</p>}
                    <FormDiv>
                        <FormLabel>City</FormLabel>
                        <FormInput type="text" value={city} onChange={(e)=>setCity(e.target.value)} />
                        <FormLabel>State</FormLabel>
                        <FormSelect value={state} onChange={(e)=>setState(e.target.value)}>
                            <option>Select a state</option>
                            <option>FL</option>
                            <option>NY</option>
                            <option>AL</option>
                            <option>CA</option>
                            <option>TX</option>
                        </FormSelect>
                    </FormDiv>
                    {errors.city && <p style={{color:"red"}}>{errors.city.message}.</p>}
                    {errors.state && <p style={{color:"red"}}>Select a state.</p>}
                    <FormDiv>
                        <FormLabel>Password</FormLabel>
                        <FormInput type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </FormDiv>
                    {errors.password && <p style={{color:"red"}}>{errors.password.message}.</p>}
                    <FormDiv>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormInput type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
                    </FormDiv>
                    {errors.confirmPassword && <p style={{color:"red"}}>{errors.confirmPassword.message}.</p>}
                    {confirmReg? <p>{confirmReg}</p>: null}
                    <FormButton>Register</FormButton>
               </Form>
               <FormDiv>
                <ContentLinks href="/companies/register">Need to Register an Organization?</ContentLinks>
               </FormDiv>
            </RegistrationWrapper>
        </FormWrapper>
    )
}

export default UserRegistration;
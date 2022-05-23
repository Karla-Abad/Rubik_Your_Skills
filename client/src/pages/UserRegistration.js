import TopBarRegistration from "../components/topbar/TopBarRegistration";
import {RegistrationWrapper} from "../components/topbar/BarWrapper.style"
import {Subtitle} from "../components/topbar/Title.style"
import { FormWrapper, Form, FormDiv, FormLabel, FormInput, FormSelect, FormButton } from "../components/forms/Forms.style";
import {ContentLinks} from "../components/topbar/MenuOptions.style"
import {Link} from "react-router-dom";

const UserRegistration = () => {
    return(
        <FormWrapper>
            <TopBarRegistration></TopBarRegistration>
            <RegistrationWrapper>
               <Subtitle fontSize="xx-large">Developer Registration</Subtitle>
               <Form>
                   <FormDiv>
                        <FormLabel>First Name</FormLabel>
                        <FormInput type="text"/>
                        <FormLabel>Last Name</FormLabel>
                        <FormInput type="text"/>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Email</FormLabel>
                        <FormInput type="text"/>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Address</FormLabel>
                        <FormInput type="text"/>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>City</FormLabel>
                        <FormInput type="text"/>
                        <FormLabel>State</FormLabel>
                        <FormSelect>
                            <option>Select a state</option>
                            <option>FL</option>
                            <option>NY</option>
                            <option>AL</option>
                            <option>CA</option>
                            <option>TX</option>
                        </FormSelect>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Password</FormLabel>
                        <FormInput type="password"/>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormInput type="password"/>
                    </FormDiv>
                    <FormButton>Register</FormButton>
               </Form>
               <FormDiv>
                <Link to="/companies/register"><ContentLinks>Need to Register and Organization?</ContentLinks></Link>
               </FormDiv>
            </RegistrationWrapper>
        </FormWrapper>
    )
}

export default UserRegistration;
import TopBarLogin from "../components/topbar/TopBarLogin";
import {RegistrationWrapper} from "../components/topbar/BarWrapper.style"
import {Subtitle, Text} from "../components/topbar/Title.style"
import { FormWrapper, Form, FormDiv, FormLabel, FormInput, FormSelect, FormButton } from "../components/forms/Forms.style";

const UserLogin = () => {
    return(
        <FormWrapper>
            <TopBarLogin></TopBarLogin>
            <RegistrationWrapper>
               <Subtitle marginBottom="0px">Welcome Back, Developer!</Subtitle>
               <Text>Let's Connect You To A Job!</Text>
               <Form>
                    <FormDiv>
                        <FormLabel>Email</FormLabel>
                        <FormInput type="text"/>
                    </FormDiv>
                    <FormDiv>
                        <FormLabel>Password</FormLabel>
                        <FormInput type="password"/>
                    </FormDiv>
                    <FormButton>Login</FormButton>
               </Form>
            </RegistrationWrapper>
        </FormWrapper>
    )
}

export default UserLogin;
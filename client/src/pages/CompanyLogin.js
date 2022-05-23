import TopBarLogin from "../components/topbar/TopBarLogin";
import {RegistrationWrapper} from "../components/topbar/BarWrapper.style"
import {Subtitle, Text} from "../components/topbar/Title.style"
import { FormWrapper, Form, FormDiv, FormLabel, FormInput, FormSelect, FormButton } from "../components/forms/Forms.style";

const CompanyLogin = () => {
    return(
        <FormWrapper>
            <TopBarLogin></TopBarLogin>
            <RegistrationWrapper>
               <Subtitle marginBottom="0px">Welcome Back!</Subtitle>
               <Text>Let's Find You Some Candidates!</Text>
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

export default CompanyLogin;
import {Title} from "./Title.style"
import {BarWrapper, MenuWrapper} from "./BarWrapper.style"
import {Logo} from "./Logo.style"
import {MenuOptions} from "./MenuOptions.style"
import {Link} from "react-router-dom";

const TopBarRegistration = ()=> {
    return (
        <MenuWrapper>
            <BarWrapper>
                <Logo src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Scramble.svg/1200px-Scramble.svg.png"} alt="Rubik Cube"/>
                <Title>RubikYourSkills</Title>
            </BarWrapper>
            <BarWrapper>
                <MenuOptions href="/devs/login">Developer Login</MenuOptions>
                <MenuOptions href="/companies/login">Company Login</MenuOptions>
            </BarWrapper>
        </MenuWrapper>
    )
}

export default TopBarRegistration;

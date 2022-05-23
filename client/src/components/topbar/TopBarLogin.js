import {Title} from "./Title.style"
import {BarWrapper, MenuWrapper} from "./BarWrapper.style"
import {Logo} from "./Logo.style"
import {MenuOptions} from "./MenuOptions.style"
import {Link} from "react-router-dom";

const TopBarLogin = ()=> {
    return (
        <MenuWrapper>
            <BarWrapper>
                <Logo src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Scramble.svg/1200px-Scramble.svg.png"} alt="Rubik Cube"/>
                <Title>RubikYourSkills</Title>
            </BarWrapper>
            <BarWrapper>
                <Link to="/"><MenuOptions>Developer Registration</MenuOptions></Link>
                <Link to="/companies/register"><MenuOptions>Company Registration</MenuOptions></Link>
            </BarWrapper>
        </MenuWrapper>
    )
}

export default TopBarLogin;

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
                <Link to="/devs/login"><MenuOptions>Developer Login</MenuOptions></Link>
                <Link to="/companies/login"><MenuOptions>Company Login</MenuOptions></Link>
            </BarWrapper>
        </MenuWrapper>
    )
}

export default TopBarRegistration;
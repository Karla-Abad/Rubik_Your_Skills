import {Title} from "./Title.style"
import {BarWrapper, MenuWrapper} from "./BarWrapper.style"
import {Logo} from "./Logo.style"
import {MenuOptions} from "./MenuOptions.style"
import {Logout} from "@mui/icons-material"

const TopBarUser = ()=> {
    return (
        <MenuWrapper>
            <BarWrapper>
                <Logo src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Scramble.svg/1200px-Scramble.svg.png"} alt="Rubik Cube"/>
                <Title>RubikYourSkills</Title>
            </BarWrapper>
            <BarWrapper>
                <MenuOptions>Profile</MenuOptions>
                <MenuOptions>Dashboard</MenuOptions>
                <MenuOptions>Logout <Logout/></MenuOptions>
            </BarWrapper>
        </MenuWrapper>
    )
}

export default TopBarUser;

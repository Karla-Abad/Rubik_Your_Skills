import {Subtitle, Title} from "./Title.style"
import {BarWrapper, MenuWrapper} from "./BarWrapper.style"
import {Logo} from "./Logo.style"
import {MenuOptions, LogoutButton} from "./MenuOptions.style"
import {Logout} from "@mui/icons-material"

const TopBarCompany =() => {
    return (
        <MenuWrapper>
            <BarWrapper>
                <Logo src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Scramble.svg/1200px-Scramble.svg.png"} alt="Rubik Cube"/>
                <Title>RubikYourSkills</Title>
            </BarWrapper>
            <Title>Org Name</Title>
            <BarWrapper>
                <MenuOptions>Dashboard</MenuOptions>
                <LogoutButton>Logout <Logout/></LogoutButton>
            </BarWrapper>
        </MenuWrapper>
    )

}

export default TopBarCompany;
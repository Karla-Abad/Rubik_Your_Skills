import {Title} from "./Title.style"
import {BarWrapper, MenuWrapper} from "./BarWrapper.style"
import {Logo} from "./Logo.style"
import {MenuOptions, LogoutButton} from "./MenuOptions.style"
import {Logout} from "@mui/icons-material"
import axios from "axios"
import {useNavigate} from "react-router-dom";

const TopBarUser = ()=> {
    let navigate = useNavigate();

    const logout = (e)=>{
        axios
        .post("http://localhost:8000/api/users/logout",{},{withCredentials:true})
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/devs/login")
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <MenuWrapper>
            <BarWrapper>
                <Logo src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Scramble.svg/1200px-Scramble.svg.png"} alt="Rubik Cube"/>
                <Title>RubikYourSkills</Title>
            </BarWrapper>
            <BarWrapper>
                <MenuOptions>Profile</MenuOptions>
                <MenuOptions>Dashboard</MenuOptions>
                <LogoutButton onClick={logout}>Logout <Logout/></LogoutButton>
            </BarWrapper>
        </MenuWrapper>
    )
}

export default TopBarUser;

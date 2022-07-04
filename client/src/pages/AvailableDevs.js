import TopBarCompany from "../components/topbar/TopBarCompany";
import { DevBio, DevNames, OrgButton, OrgContentContainer, OrgContentTitle, OrgSubContentContainer } from "../components/company-dashboard/CompanyContent.style";
import HtmlRoundedIcon from '@mui/icons-material/HtmlRounded';
import CssRoundedIcon from '@mui/icons-material/CssRounded';
import JavascriptRoundedIcon from '@mui/icons-material/JavascriptRounded';
import LocalCafeRoundedIcon from '@mui/icons-material/LocalCafeRounded';
import { ContentContainer } from "../components/dev-com-content/ContentContainer.style";

const AvailableDevs = ()=> {
    return(
        <div>
            <TopBarCompany></TopBarCompany>
            <ContentContainer style={{margin:"0px", padding:"0px"}}>
                <OrgContentContainer style={{margin:"0px"}}>
                    <OrgSubContentContainer style={{border:"none"}}>
                        <OrgContentTitle style={{color: "gray", textAlign:"center", margin:"0px"}}>PLACEHOLDER</OrgContentTitle>
                    </OrgSubContentContainer>
                </OrgContentContainer>
                <OrgContentContainer >
                    <OrgContentTitle style={{color:"white", backgroundColor:"darkgray", border:"3px solid gray", margin:"0px"}}>Available Devs</OrgContentTitle>
                    <OrgSubContentContainer style={{margin:"0px", overflowY:"scroll"}}>
                        <DevNames>Jane Doe</DevNames>
                        <HtmlRoundedIcon style={{width:50, height:50, margin:"0px 35px", padding:"0px 20px", border:"2px solid gray"}}></HtmlRoundedIcon>
                        <CssRoundedIcon style={{width:50, height:50, margin:"0px 35px", padding:"0px 20px", border:"2px solid gray"}}></CssRoundedIcon>
                        <DevBio>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla consequatur earum numquam tenetur, velit voluptatum eius ducimus iste cum aut dolor neque cumque rem ad laboriosam quia. Molestiae, quod.</DevBio>
                        <hr></hr>
                        <DevNames>Jane Doe</DevNames>
                        <CssRoundedIcon style={{width:50, height:50, margin:"0px 35px", padding:"0px 20px", border:"2px solid gray"}}></CssRoundedIcon>
                        <DevBio>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla consequatur earum numquam tenetur, velit voluptatum eius ducimus iste cum aut dolor neque cumque rem ad laboriosam quia. Molestiae, quod.</DevBio>
                        <hr></hr>
                    </OrgSubContentContainer>
                </OrgContentContainer>
            </ContentContainer>
        </div>
    )
}

export default AvailableDevs;
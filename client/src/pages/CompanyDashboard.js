import { DevBio, DevNames, OrgButton, OrgContentContainer, OrgContentTitle, OrgSubContentContainer } from "../components/company-dashboard/CompanyContent.style";
import { ContentContainer } from "../components/dev-com-content/ContentContainer.style";
import TopBarCompany from "../components/topbar/TopBarCompany";
import HtmlRoundedIcon from '@mui/icons-material/HtmlRounded';
import CssRoundedIcon from '@mui/icons-material/CssRounded';
import JavascriptRoundedIcon from '@mui/icons-material/JavascriptRounded';
import LocalCafeRoundedIcon from '@mui/icons-material/LocalCafeRounded';

const CompanyDashboard =()=>{
    return(
        <div>
            <TopBarCompany></TopBarCompany>
            <ContentContainer style={{display:"flex"}}>
                <OrgContentContainer style={{flex:"1"}}>
                    <OrgButton>List a New Position</OrgButton>
                    <OrgSubContentContainer style={{margin:"10px 0px"}}>
                        <OrgContentTitle style={{color: "gray"}}>Positions to Fill</OrgContentTitle>
                    </OrgSubContentContainer>
                </OrgContentContainer>
                <OrgContentContainer style={{flex:"2"}}>
                    <OrgContentTitle style={{color:"white", backgroundColor:"darkgray", border:"3px solid gray"}}>Available Devs</OrgContentTitle>
                    <OrgSubContentContainer style={{margin:"0px 15px", overflowY:"scroll"}}>
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

export default CompanyDashboard;
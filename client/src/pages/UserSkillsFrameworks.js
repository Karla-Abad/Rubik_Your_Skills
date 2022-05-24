import { ContentContainer, DevMainWrapper, ContentHeaderDiv, ContentMainDiv, ContentTitle, ContentSubtitle, SubContentMainDiv } from "../components/dev-com-content/ContentContainer.style";
import { ProgressTwo } from "../components/dev-com-content/Progress";
import TopBarUser from "../components/topbar/TopBarUser"
import { FormButton, Form } from "../components/forms/Forms.style";
import TimelapseRoundedIcon from '@mui/icons-material/TimelapseRounded';
import  ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import DirectionsTransitRoundedIcon from '@mui/icons-material/DirectionsTransitRounded';
import AddReactionRoundedIcon from '@mui/icons-material/AddReactionRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import TextRotationAngleupRoundedIcon from '@mui/icons-material/TextRotationAngleupRounded';
import { AvailableSkillsButton, AvailableSkillsDiv } from "../components/dev-com-content/Icons.style";

const UserSkillsFrameworks = () => {
    return (
        <div>
            <TopBarUser></TopBarUser>
            <Form>
            <ContentContainer >
                <DevMainWrapper>
                    <ContentHeaderDiv>
                        <ContentTitle>Add Your Skills </ContentTitle>
                        <ProgressTwo/>
                    </ContentHeaderDiv>
                    <ContentMainDiv>
                        <div style={{display:'flex'}}>
                        <SubContentMainDiv>
                            <ContentSubtitle>Pick Your Top 5 Frameworks or Libraries: </ContentSubtitle>
                            <AvailableSkillsDiv>
                                <div>
                                    <AvailableSkillsButton title="DJANGO" ><TimelapseRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    <AvailableSkillsButton title="FLASK" ><ScienceRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    <AvailableSkillsButton title="RAILS" ><DirectionsTransitRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    <AvailableSkillsButton title="SPRING" ><SpaRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                </div>
                                <div>
                                    
                                    <AvailableSkillsButton title="REACT" ><AddReactionRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    <AvailableSkillsButton title="RUBY" ><DiamondRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    <AvailableSkillsButton title="ANGULAR" ><TextRotationAngleupRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                </div>
                            </AvailableSkillsDiv>
                        </SubContentMainDiv>
                        <SubContentMainDiv style={{marginLeft:"50px"}}>
                            <AvailableSkillsDiv></AvailableSkillsDiv>
                            <ContentSubtitle>Short Bio</ContentSubtitle>
                            <AvailableSkillsDiv>
                                <p>PLACEHOLDER FOR INSPIRATIONAL QUOTE</p>
                            </AvailableSkillsDiv>
                        </SubContentMainDiv>
                        </div>
                        <SubContentMainDiv justifyContent="right">
                            <FormButton> COMPLETE PROFILE </FormButton>
                        </SubContentMainDiv>
                    </ContentMainDiv>
                </DevMainWrapper>
            </ContentContainer>
            </Form>
        </div>
    )
}

export default UserSkillsFrameworks;
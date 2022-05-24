import { ContentContainer, DevMainWrapper, ContentHeaderDiv, ContentMainDiv, ContentTitle, ContentSubtitle, SubContentMainDiv } from "../components/dev-com-content/ContentContainer.style";
import { Progress } from "../components/dev-com-content/Progress";
import TopBarUser from "../components/topbar/TopBarUser"
import { FormButton, Form } from "../components/forms/Forms.style";
import HtmlRoundedIcon from '@mui/icons-material/HtmlRounded';
import CssRoundedIcon from '@mui/icons-material/CssRounded';
import JavascriptRoundedIcon from '@mui/icons-material/JavascriptRounded';
import LocalCafeRoundedIcon from '@mui/icons-material/LocalCafeRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import AssignmentReturnRoundedIcon from '@mui/icons-material/AssignmentReturnRounded';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import { AvailableSkillsButton, AvailableSkillsDiv } from "../components/dev-com-content/Icons.style";
import {Link} from "react-router-dom";

const UserSkillsLanguages = () => {
    return (
        <div>
            <TopBarUser></TopBarUser>
            <Form>
            <ContentContainer >
                <DevMainWrapper>
                    <ContentHeaderDiv>
                        <ContentTitle>Add Your Skills </ContentTitle>
                        <Progress/>
                    </ContentHeaderDiv>
                    <ContentMainDiv>
                        <div style={{display:'flex'}}>
                        <SubContentMainDiv>
                            <ContentSubtitle>Pick Your Top 5 Languages: </ContentSubtitle>
                            <AvailableSkillsDiv>
                                <div>
                                    <AvailableSkillsButton title="HTML" ><HtmlRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    <AvailableSkillsButton title="CSS" ><CssRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    <AvailableSkillsButton title="PYTHON" ><CodeRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                </div>
                                <div>
                                    <AvailableSkillsButton title="JAVASCRIPT" ><JavascriptRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    <AvailableSkillsButton title="JAVA" ><LocalCafeRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    <AvailableSkillsButton title="C#" ><WindowRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                </div>
                                <div>
                                    <AvailableSkillsButton title="GO" ><AssignmentReturnRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    <AvailableSkillsButton title="TYPESCRIPT" ><HistoryEduRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                </div>
                            </AvailableSkillsDiv>
                        </SubContentMainDiv>
                        <SubContentMainDiv style={{marginLeft:"50px"}}>
                            <AvailableSkillsDiv></AvailableSkillsDiv>
                            <ContentSubtitle>Short Bio</ContentSubtitle>
                            <textarea placeholder="Add more about yourself here." style={{width:350, height:135}}></textarea>
                        </SubContentMainDiv>
                        </div>
                        <SubContentMainDiv justifyContent="right">
                            <Link to="/devs/skills/frameworks"><FormButton>Skip This Step</FormButton></Link>
                            <FormButton> NEXT STEP: Frameworks and Libraries</FormButton>
                        </SubContentMainDiv>
                    </ContentMainDiv>
                </DevMainWrapper>
            </ContentContainer>
            </Form>
        </div>
    )
}

export default UserSkillsLanguages;
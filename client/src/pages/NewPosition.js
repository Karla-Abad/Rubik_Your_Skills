import TopBarCompany from "../components/topbar/TopBarCompany";
import { ContentContainer, DevMainWrapper, ContentHeaderDiv, ContentMainDiv, ContentTitle, SubContentMainDiv } from "../components/dev-com-content/ContentContainer.style";
import HtmlRoundedIcon from '@mui/icons-material/HtmlRounded';
import CssRoundedIcon from '@mui/icons-material/CssRounded';
import JavascriptRoundedIcon from '@mui/icons-material/JavascriptRounded';
import LocalCafeRoundedIcon from '@mui/icons-material/LocalCafeRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import AssignmentReturnRoundedIcon from '@mui/icons-material/AssignmentReturnRounded';
import HistoryEduRoundedIcon from '@mui/icons-material/HistoryEduRounded';
import { AvailableSkillsButton, AvailableSkillsDiv } from "../components/dev-com-content/Icons.style";
import { Form, FormLabel,FormInput,FormButton,TextAreaInput } from "../components/forms/Forms.style";
import TimelapseRoundedIcon from '@mui/icons-material/TimelapseRounded';
import  ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import DirectionsTransitRoundedIcon from '@mui/icons-material/DirectionsTransitRounded';
import AddReactionRoundedIcon from '@mui/icons-material/AddReactionRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import TextRotationAngleupRoundedIcon from '@mui/icons-material/TextRotationAngleupRounded';

const NewPosition = ()=> {
    return(
        <div>
            <TopBarCompany></TopBarCompany>
            <Form>
            <ContentContainer >
                <DevMainWrapper>
                    <ContentHeaderDiv>
                        <ContentTitle>Add A Position</ContentTitle>
                    </ContentHeaderDiv>
                    <ContentMainDiv>
                        <SubContentMainDiv style={{display:"flex", justifyContent:"space-between"}} >
                            <FormLabel style={{textAlign:"left", flex:2}}>Name: </FormLabel>
                            <FormInput style={{flex:5}} type="text" />
                        </SubContentMainDiv>
                        <SubContentMainDiv style={{display:"flex", margin:"15px 0px 15px 0px"}}>
                            <FormLabel style={{textAlign:"left",flex:2}}>Description:</FormLabel>
                            <TextAreaInput placeholder="Add more about the position here." style={{width:350, height:135, flex:5}}></TextAreaInput>
                        </SubContentMainDiv>
                        <SubContentMainDiv style={{display:"flex", justifyContent:"space-between"}}>
                            <FormLabel style={{textAlign:"left",flex:2}}>Skills:</FormLabel>
                            <AvailableSkillsDiv>
                                    <div>
                                        <AvailableSkillsButton title="HTML" ><HtmlRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                        <AvailableSkillsButton title="CSS" ><CssRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                        <AvailableSkillsButton title="PYTHON" ><CodeRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                        <AvailableSkillsButton title="JAVASCRIPT" ><JavascriptRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                        <AvailableSkillsButton title="JAVA" ><LocalCafeRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    </div>
                                    <div>
                                        <AvailableSkillsButton title="GO" ><AssignmentReturnRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                        <AvailableSkillsButton title="TYPESCRIPT" ><HistoryEduRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                        <AvailableSkillsButton title="C#" ><WindowRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                        <AvailableSkillsButton title="DJANGO" ><TimelapseRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                        <AvailableSkillsButton title="FLASK" ><ScienceRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    </div>
                                    <div>
                                    <AvailableSkillsButton title="RAILS" ><DirectionsTransitRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    <AvailableSkillsButton title="SPRING" ><SpaRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    <AvailableSkillsButton title="REACT" ><AddReactionRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    <AvailableSkillsButton title="RUBY" ><DiamondRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    <AvailableSkillsButton title="ANGULAR" ><TextRotationAngleupRoundedIcon style={{width:50, height:50}} /></AvailableSkillsButton>
                                    </div>
                                </AvailableSkillsDiv>
                        </SubContentMainDiv>
                        <SubContentMainDiv justifyContent="right">
                            <FormButton>Add Position</FormButton>
                        </SubContentMainDiv>
                    </ContentMainDiv>
                </DevMainWrapper>
            </ContentContainer>
            </Form>
        </div>
    )
}

export default NewPosition;
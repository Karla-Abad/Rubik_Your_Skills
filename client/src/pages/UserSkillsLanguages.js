import { ContentContainer, DevMainWrapper, ContentHeaderDiv, ContentMainDiv, ContentTitle, ContentSubtitle, SubContentMainDiv } from "../components/dev-com-content/ContentContainer.style";
import { Progress } from "../components/dev-com-content/Progress";
import TopBarUser from "../components/topbar/TopBarUser"
import { FormButton } from "../components/forms/Forms.style";

const UserSkillsLanguages = () => {
    return (
        <div>
            <TopBarUser></TopBarUser>
            <ContentContainer>
                <DevMainWrapper>
                    <ContentHeaderDiv>
                        <ContentTitle>Add Your Skills </ContentTitle>
                        <Progress/>
                    </ContentHeaderDiv>
                    <ContentMainDiv>
                        <SubContentMainDiv>
                            <ContentSubtitle>Pick Your Top 5 Languages: </ContentSubtitle>
                        </SubContentMainDiv>
                        <SubContentMainDiv></SubContentMainDiv>
                        <SubContentMainDiv justifyContent="right">
                            <FormButton>Skip This Step</FormButton>
                            <FormButton> NEXT STEP: Frameworks and Libraries</FormButton>
                        </SubContentMainDiv>
                    </ContentMainDiv>
                </DevMainWrapper>
            </ContentContainer>
        </div>
    )
}

export default UserSkillsLanguages;
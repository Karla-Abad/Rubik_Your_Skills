import styled from "styled-components";

export const OrgContentContainer = styled.div`
    flex: ${(props)=> props.flex};
`

export const OrgButton = styled.button`
    background-color: greenyellow;
    color: gray;
    font-size: large;
    border: none;
    width: 100%;
    padding: 10px 50px;
    border-radius: 3px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;

    &:hover {
        cursor: pointer;
        background-color: cornflowerblue;
        color: whitesmoke;
    }
`

export const OrgContentTitle = styled.h3`
    color: ${(props)=> props.color};
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
    font-size: x-large;
    background-color: ${(props)=> props.backgroundColor};
    padding: 20px;
    border: ${(props)=> props.border};
    margin: 0px 15px;
`

export const OrgSubContentContainer = styled.div`
    overflow-y: ${(props)=> props.overflowY};
    border: 3px solid gray;
    margin: ${(props)=> props.margin};
`

export const DevNames = styled.h3`
    color: gray;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
    text-decoration: underline;
    padding: 20px;
    border: ${(props)=> props.border};
    margin: 0px 15px;
`

export const DevBio = styled.p`
    color: gray;
    margin: 0px 15px;
    padding: 20px;
`
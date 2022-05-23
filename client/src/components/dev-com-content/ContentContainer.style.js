import styled from "styled-components";

export const ContentContainer = styled.div`
    padding: ${(props)=> props.padding};
    margin: 30px 60px;
`

export const DevMainWrapper = styled.div`
    border: 3px solid gray;
    margin: auto;
`

export const ContentHeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: darkgrey ;
    padding: 0px 30px;
    margin: auto;
    border-bottom: 3px solid gray;
    align-items: baseline;
`

export const ContentMainDiv = styled.div`
    padding: 10px;
    margin: auto;
`

export const SubContentMainDiv = styled.div`
    display: flex;
    justify-content: ${(props)=> props.justifyContent};
`
export const ContentTitle = styled.h2`
    color: white;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
    font-size: xx-large;
`

export const ContentSubtitle = styled.h3`
    color: gray;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
`
import styled from "styled-components";

export const Title = styled.h1`
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
    background-color: grey;
    margin-left: 5px;
`

export const Subtitle = styled.h2`
    color: gray;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
    text-align: center;
    font-size: xx-large;
    margin-bottom: ${(props) => props.marginBottom} ;
`

export const Text = styled.p`
    color: gray;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
    text-align: center;
`




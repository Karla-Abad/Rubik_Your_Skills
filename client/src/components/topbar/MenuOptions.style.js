import styled from "styled-components";

export const MenuOptions = styled.a`
   color: white;
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
   text-decoration: none;
   background-color: gray;
   font-size: larger;
   margin: 0px 25px;
   .MuiSvgIcon-root {
           vertical-align: middle;
       }
   
   &:hover {
       & .MuiSvgIcon-root {
           width: 40px;
           height: 40px;
           vertical-align: middle;
       }
    cursor: pointer;
    font-size: x-large;
       
   }
`

export const ContentLinks = styled.a`
   color: gray;
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;  
   &:hover {
    cursor: pointer;
    font-size: large;
       
   }
`


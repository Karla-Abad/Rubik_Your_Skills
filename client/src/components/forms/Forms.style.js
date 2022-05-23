import styled from "styled-components";

export const FormWrapper = styled.div`
    text-align: center;
    padding-right: 20px;
`

export const Form = styled.form`
    text-align: right;
    padding-right: 25px;
    
`

export const FormDiv = styled.div`
    margin: 10px auto;
    display: flex;
`

export const FormLabel = styled.label`
    text-align: right;
    color: gray;
    padding: 2px;
    font-weight: 450;
    margin-right: 5px;
    margin-left: 5px;
    width: 130px;
`

export const FormInput = styled.input`
    border: 2px solid gray;
    padding: 2px;
    border-radius: 5px;
    height:20px;
    flex: 4;
`
export const FormSelect = styled.select`
    border: 2px solid gray;
    padding: 2px;
    border-radius: 5px;
    height:29px;
`

export const FormButton = styled.button`
    background-color: greenyellow;
    color: gray;
    font-size: large;
    border: none;
    padding: 10px 50px;
    border-radius: 3px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
    margin-left: 5px;

    &:hover {
        cursor: pointer;
        background-color: cornflowerblue;
        color: whitesmoke;
    }
`
import React from  'react';
import styled from 'styled-components';
import {ProfileImage} from './ProfileImage';



const UserGridStyled = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 50px;
    grid-template-areas: "photo name"
                         "photo label"
                         "photo description";

`
const Photo = styled.div`
    grid-area: photo;
`
const Name = styled.div`
    grid-area: name;
    font-size: 35px;

`
const Label = styled.div`
    grid-area: label;
`
const Description = styled.div`
    grid-area: description;
    max-width: 300px;

`


export default function(){
    return <UserGridStyled>
        <Photo><ProfileImage/></Photo>
        <Name>TableFlash</Name>
    
        <Label><strong> 400 </strong>Followers</Label>
        <Description>
        Your favorite Asian food is here 🍜🍛🍣🍲 Looking for a great deal? Order now!
        </Description>
    </UserGridStyled>
}
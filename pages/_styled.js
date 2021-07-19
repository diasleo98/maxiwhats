import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import Image from 'next/image'

export const Grid = styled.div`
    width:100vw;
    height:100vh;
    display: grid;
    background:deeppink;
    grid-template: 20% 80% / 20% 60% 20%;
    /* grid-template-rows: 20% 80%;
    grid-template-columns: 20% 60% 20%; */
    grid-template-areas: 
    "logo top whats"
    "content content content"
    
`;
export const PageTitle = styled.h1`
    grid-area: top;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

export const Logo = styled.div`
    width:100%;
    height:100%;
    display: flex;
    /* grid-row: 1;
    grid-column: 1; */
    Image{
        height: 100%;
        width: 100%
    }
    
`;
export const Whats = styled.div`
    width:100%;
    height:100%;
    display: flex;
    /* grid-row: 1;
    grid-column: 3; */
    grid-area: whats;
    Image{
        height: 100%;
        width: 100%
    }
`;
export const Content = styled.div`
    height: 100%;
    width: 100%;
    /* grid-row: 1/3;
    grid-column: 1/3; */
    grid-area: content;
    background:lightblue;
    display: flex;
    flex-direction: column;
    align-content: center;
`;

export const NumberInput = styled(TextField)`





`;
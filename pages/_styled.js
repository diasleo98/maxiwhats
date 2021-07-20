import styled from "styled-components"
import TextField from '@material-ui/core/TextField';
import Image from 'next/image'
import Lottie from 'react-lottie';

export const Grid = styled.div`
    width:100vw;
    height:100vh;
    display: grid;
    background:linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(62,62,62,1) 35%, rgba(255,0,185,1) 100%);
    grid-template: 30% 70% / 20% 60% 20%;
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
    flex-direction: column; 
    justify-content: center; 
    align-content: center; 
    align-items: center; 
    flex-wrap: wrap;

    
`;
export const Whats = styled.div`
    grid-area: whats;
    width:100%;
    height:100%;

    display: flex;

    flex-direction: column; 
    justify-content: center; 
    align-content: center; 
    align-items: center; 
    flex-wrap: wrap; 
`;
export const Content = styled.div`
    height: 100%;
    width: 100%;
    /* grid-row: 1/3;
    grid-column: 1/3; */
    grid-area: content;
    display: flex;
    flex-direction: column;
    align-content: center;
`;
export const AniLogo = styled(Lottie)`
    height: 100%;
    width: 100%;
    
    align-self: center; // // alinhamento de base, topo ou centro com elementos de tamanhos distintos
    flex-grow: 1; // se preenche o espaço restante ou não
    flex-shrink: 3; // se reduz o tamanho se necessário
`

;

export default Grid;
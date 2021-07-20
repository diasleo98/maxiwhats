import styled from "styled-components"
import { motion } from "framer-motion"

export const Grid = styled.div`
    display: grid;
    height: 100vh;
    width: 100vw;
    /* grid-template: 1fr 1fr / 1fr 1fr 1fr; */
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
    'a b c'
    'd e f';
    /* grid-column-gap: 10px;
    grid-row-gap: 15px;
    grid-gap: 10px 15px; */
`
export const E1 = styled.div`
    grid-area: a;
    height: 100%;
    width: 100%;
    background: blue;

    display: flex;
    flex-direction: column; // row ou column, invertido ou nao

    justify-content: flex-end; // alinhamento vertical (column), horizontal (row)
    align-content: flex-start; // alinhamento vertical (row), horizontal (column)
    align-items: center; // alinhamento de base, topo ou centro (nao consegui testar mudanças)

    flex-wrap: wrap; // se pode quebrar a linha ou nao

`
export const C1 = styled.div`
    align-self: center; // // alinhamento de base, topo ou centro com elementos de tamanhos distintos
    flex-grow: 0; // se preenche o espaço restante ou não
    flex-shrink: 1; // se reduz o tamanho se necessário

    height: 20%;
    width: 10%;
    background: black;

    border: white;
    border-style: solid;
`

export const E2 = styled.div`
    grid-area: b;
    height: 100%;
    width: 100%;
    background: orange;

    display: flex;
    flex-direction: row; 
    justify-content: space-around; 
    align-content: center; 
    align-items: center; 

    flex-wrap: wrap; 
    
`

export const C2 = styled.div`
    align-self: flex-start; 
    flex-grow: 0; 
    flex-shrink: 1; 

    height: 10%;
    width: 10%;
    background: white;

    border: black;
    border-style: solid;
`

export const E3 = styled.div`
    grid-area: c;
    height: 100%;
    width: 100%;
    background: red;

    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    grid-template-areas:
    "a b"
    "c d";

    div{
        font-size: 30px;
    }
    

`

export const C3 = styled.div.attrs((/* props*/) => ({ tabIndex: 0 }))`
    /* grid-area: c; */
    height: 100%;
    width: 100%;

    background: black;

    border: white solid;
    /* border-style: solid; */
    color: white;
    text-align: center;

    grid-area: ${props => props.area};
    background: ${props => props.background};

    &:hover{
        background: cyan;
    }
`

export const InvC3 = props => <C3 {...props} children={props.children.split('').reverse()} />

export const E4 = styled.div`
    grid-area: d;
    height: 100%;
    width: 100%;
    background: yellow;

    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-content: center; 
    align-items: center; 

    flex-wrap: wrap; 
`

export const C4 = styled(motion.div)`
    background: deeppink;
    height: 10%;
    width:10%;


`
export const E5 = styled.div`
    grid-area: e;
    height: 100%;
    width: 100%;
    background: white;

    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-content: center; 
    align-items: center; 

    flex-wrap: wrap; 
`
export const E6 = styled.div`
    grid-area: f;
    height: 100%;
    width: 100%;
    background: purple;
`




import Head from 'next/head'
import Image from 'next/image'
import { Grid, Logo, Whats, Content, PageTitle, LogoImg } from './_styled' 
import TextField from '@material-ui/core/TextField';
import logo from '../images/logo.png'
import whats from '../images/whats.png'
import { useState } from 'react';



export default function Home() {
  const [number, setNumber] = useState();
  const [text, setText] = useState();
  return (
    <Grid>
      <Head>
        <title>Whats</title>
      </Head>
      <PageTitle className=" text-5xl">
        Maxipas Whats
      </PageTitle>
     <Logo>
       <Image src={logo} alt="logo" ></Image>
     </Logo>
     <Whats>
       <Image src={whats} alt="whats"></Image>
     </Whats>
     <Content>
        <input id="i" onChange={typed} className=" mt-10 mx-10 appearance-none border border-transparent p-2 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Número do WhatsApp (COM DDD)"></input>
        <textarea type="text" onChange={textTyped} className=" self-stretch p-2 m-10 rounded" placeholder="Texto a ser enviado..."></textarea>
        <button onClick={clicked} className=" mx-5 bg-pink-500 text-white text-base font-semibold h-10 w-50 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="button">
          Enviar
        </button>      
     </Content>
    </Grid>
  )
  function clicked(props){
    if(!(isNaN(number))){
      console.log(text);
      window.open(`https://wa.me/${number}/?text=${text}`, "Whats")
      document.getElementById("i").value = "";
      setNumber("");
    }
    else{
      window.alert("Número inválido");
    }
  }
  function typed(event){
    console.log(event.target.value);
    setNumber("55" + event.target.value);
  }
  function textTyped(event){
    console.log(event.target.value);
    setText(event.target.value);

  }

}

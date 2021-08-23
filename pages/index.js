import Head from 'next/head'
import Image from 'next/image'
import { Grid, Logo, Whats, Content, PageTitle, LogoImg, AniLogo } from './_styled' 
import TextField from '@material-ui/core/TextField';
import logo from '../images/logo.png'
import whats from '../images/whats.png'
import { useState } from 'react';
import Lottie from 'react-lottie';
import animationWhats from '../animations/whats.json';
import animationMaxi from '../animations/loop.json';
import ReactInputMask from 'react-input-mask';




export default function Home() {
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");

  var openedWindow;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationWhats,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationMaxi,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
  return (
    <Grid>
      <Head>
        <title>Whats</title>
      </Head>
      <PageTitle className=" text-5xl text-gray-200">
        MAXIPAS WHATS
      </PageTitle>
     <Logo>
       <AniLogo options={defaultOptions2} ></AniLogo>
     </Logo>
     <Whats>
       <Lottie className=" flex-shrink-1 h-full w-full flex-grow-1" options={defaultOptions}/>
     </Whats>
     <Content>
        <ReactInputMask type="text" id="i" value={number} maskChar={null}  onChange={typed} mask="(99) 99999-9999" className=" mt-10 mx-10 appearance-none border border-transparent p-2 bg-white text-gray-700 placeholder-gray-400 shadow-md rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" placeholder="Número do WhatsApp (COM DDD)"></ReactInputMask>
        <textarea value={text} type="text" onChange={textTyped} className=" self-stretch p-2 m-10 rounded focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent" placeholder="Texto a ser enviado..."></textarea>
        <button onClick={clicked} className=" mx-5 bg-pink-500 text-white text-base font-semibold h-10 w-50 rounded-lg shadow-md hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 " type="button">
          Enviar
        </button>      
     </Content>
    </Grid>
  )
  function clicked(props){
    if(number != "" && !isNaN(number)){
      openedWindow = window.open(`https://wa.me/${"55" + number}/?text=${text}`, "Whats");
      //setTimeout(ClosePage, 2000);
      setNumber("");
    }
    else{
      window.alert("Número inválido");
    }
  }
  function ClosePage(){
    openedWindow.close();
  }
  function typed(event){
    var res = event.target.value.replace("(", "").replace(")","").replace(" ", "").replace("-", "").replace("_","");
    console.log(res);
    setNumber(res);
  }
  function textTyped(event){
    console.log(event.target.value);
    setText(event.target.value);
  }

}

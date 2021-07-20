import { Grid, E1, E2, E3, E4, E5, E6, C1, C2, C3, InvC3, C4 } from './_styled';
import {useState, useEffect} from 'react';
import Lottie from 'react-lottie';
import animationWhats from '../../animations/whats.json';

export default function Page(){
    
    const [i, setI] = useState(0);
    // useEffect(() => {
    //     window.setTimeout(animate, 1000);
        
    // }, []);

    function animate(){
        if(i >= 360){
            setI(0);
        }
        setI(i + 1);
        return i;
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationWhats,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return(
        <Grid>
            <E1>
                <C1></C1>
                <C1></C1>
                <C1></C1>
            </E1>
            <E2>
                <C2></C2>
                <C1></C1>
                <C2></C2>
            </E2>
            <E3>
                <C3 background="blue" area="b"></C3>
                <C3 area="c"> Area C</C3>
                <InvC3  background="deeppink"> Texto Invertido </InvC3>
            </E3>
            <E4>
                <C4 animate={{ rotate: i, scale: i/200}} drag="x" dragConstraints={{ left: -100, right: 100 }}></C4>
            </E4>
            <E5>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </E5>
            <E6></E6>
        </Grid>
    )

}
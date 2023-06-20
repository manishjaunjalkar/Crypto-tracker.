import React from "react";
import "./styles.css"
import Button from "../../Common/Button";
import  Gradient from "../../../assets/gradient.png";
import  Iphone from "../../../assets/iphone.png";
import {motion} from "framer-motion"


function MainComponent(){
    return (
        <div className="flex-info">
            <div className="left-component">
                <motion.h1 className="track-crypto-heading"
                initial={{opacity:0,y:50}}
                animate={{opacity:1,y:0}}
                transition={{duration:1}}
                >Track Crypto</motion.h1>
                <motion.h1 className="real-time-heading"
                 initial={{opacity:0,y:50}}
                 animate={{opacity:1,y:0}}
                 transition={{duration:1,delay:0.5}}
 
                >Real Time</motion.h1>
                <motion.p className="info-text"
                 initial={{opacity:0,y:50}}
                 animate={{opacity:1,y:0}}
                 transition={{duration:1,delay:0.75}}

                >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
               
                <motion.div className="btn-flex" 
                 initial={{opacity:0,x:50}}
                 animate={{opacity:1,x:0}}
                 transition={{duration:1,delay:1}}
 
                >
                    <a  href="/dashboard"><Button text={"Dashboard"}/></a>
                    <Button text={"Share"} outlined={true}/>
                </motion.div>
            </div>
            <div className="phone-container">
                <motion.img src={Iphone} className="iphone"
                 initial={{y:-10}}
                 animate={{y:10}}
                 transition={{
                    type:"smooth",
                    repeatType:"mirror",
                    duration:2,
                    repeat:Infinity,

                 }}
 
                />
                <img src={Gradient} className="gradient"/>

            </div>
           
        </div>
    )
}
export default MainComponent
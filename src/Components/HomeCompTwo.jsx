import React from 'react';
import Style from './HomeCompTwo.module.css'
function HomeCompTwo(props) {
    return (
        <div>
            <p style={{color:"#6d6969ff",width:"50%", textAlign:"center",margin:"20px auto"}}>Traveling is a brutality. It forces you to trust strangers and to lose sight of all that familiar comfort of home and friends. You are constantly off balance. Nothing is yours except the essential things: air, sleep, dreams, sea, the sky – all things tending towards the eternal or what we imagine of it</p>
           <div className={Style.cards}>
            <div className={Style.card1}><h1 style={{color:"white"}}>Travel</h1></div>
            <div className={Style.card2}><h1 style={{color:"white"}}>Eat</h1></div>
            <div className={Style.card3}><h1 style={{color:"white"}}>Relax</h1></div>
           </div>
        </div>
    );
}

export default HomeCompTwo;
import { useState, useRef } from 'react';
import { getRandomBall } from '../../functions/functions';
import './game.css'
let position = 50;


export const Game = ()=>{
    const [isCatching, setIsCatching] = useState(false);
    const btnLeft = useRef();
    const btnRight = useRef();
    const btnPush = useRef();
    const garra = useRef();
    const quote = useRef();
    const fail = useRef();

    const handleMachine = ()=>{
        if (isCatching) return;
        setIsCatching(true);
        const getReward = Math.random() > 1/3;
        garra.current.style.animation = 'goDown 4s ease-in-out';
        if (getReward) {
            setTimeout(() => {
                garra.current.style.backgroundImage = getRandomBall();
            }, 2000);
        }
        fail.current.style.animation = '';
        setTimeout(() => {
            garra.current.style.animation = '';
            garra.current.style.backgroundImage = 'url(/cuteContact-garra.png)';
            if (getReward) quote.current.style.display = 'inherit';
            else {
                setIsCatching(false);
                fail.current.style.animation = 'showFail 2s linear';
            }
        }, 4000);
    }

    const handleReward = ()=>{
        setIsCatching(false);
        quote.current.style.display = 'none';
    }

    const moveLeft = ()=>{
        if (position <= 30 || isCatching) return;
        position -= 10;
        garra.current.style.left = position + '%';
    }
    const moveRight = ()=>{
        if (position >= 70 || isCatching) return;
        position += 10;
        garra.current.style.left = position + '%';
    }

    return (
        <div className='cuteContact-machine'>
            <p ref={fail} className='cuteContact-fail'>Oops!, try again</p>
            <span onClick={handleReward} ref={quote} className="cuteContact-quote">
                Tap to play again.
            </span>
            <span ref={garra} id='garra'></span>
            <img src='/cuteContact-machine.png' alt='Game machine' id='machine' />
            <div className="machine-btns">
                <span onClick={handleMachine} ref={btnPush} id='machine-btn-push'></span>
                <span onClick={moveLeft} ref={btnLeft} id='machine-btn-left'></span>
                <span onClick={moveRight} ref={btnRight} id='machine-btn-right'></span>
            </div>
        </div>
    )
}
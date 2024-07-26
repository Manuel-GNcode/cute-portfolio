import { useState, useRef } from 'react';
import { getRandomString } from '../../functions/functions';
import { randomQuotes } from '../../constants/constants';
import { colorBalls } from '../../constants/constants';
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
                garra.current.style.backgroundImage = getRandomString(colorBalls);
            }, 2000);
        }
        fail.current.style.animation = '';
        setTimeout(() => {
            garra.current.style.animation = '';
            garra.current.style.backgroundImage = 'url(contact/ball/ball-none.webp)';
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
            <p onClick={handleReward} ref={quote} className="cuteContact-quote">
                {getRandomString(randomQuotes)}
                <span>(Tap to play again)</span>
            </p>
            <span ref={garra} id='garra'></span>
            <img width='1589' height='1854' src='/contact/contact-machine.webp' alt='Game machine' id='machine' />
            <div className="machine-btns">
                <span onClick={handleMachine} ref={btnPush} id='machine-btn-push'></span>
                <span onClick={moveLeft} ref={btnLeft} id='machine-btn-left'></span>
                <span onClick={moveRight} ref={btnRight} id='machine-btn-right'></span>
            </div>
        </div>
    )
}
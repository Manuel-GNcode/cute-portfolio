import './front.css';
import { useRef } from 'react';

export const Front = ()=>{
    const cuteAvatar = useRef();
    const cuteText = useRef();
    const cuteFront = useRef();
    const cuteImg = useRef();

    const hideFront = ()=>{
        cuteFront.current.style.animation = 'hideFront 0s ease-out 1.4s forwards';
        cuteAvatar.current.style.animation = 'hideAvatar .4s ease-in forwards';
        cuteText.current.style.opacity = '0';
        cuteImg.current.style.animation = 'zoomImg 1s ease-in .2s forwards'
    }

    return (
        <article ref={cuteFront} onClick={hideFront} id="cuteFront">
            <img ref={cuteImg} className='cuteFront-background' src="home/public/cute-background.png" alt="background" />
            <p ref={cuteText} className="cuteFront-text"><span className='cuteFront-point'></span> Click to Start <span className='cuteFront-point'></span></p>
            <img ref={cuteAvatar} className='cuteFront-avatar' src="home/public/cute-avatar.png" alt="Avatar" />
        </article>
    )
}
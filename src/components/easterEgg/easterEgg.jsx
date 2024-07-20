import { useRef } from 'react';
import PropTypes from 'prop-types';
import './easterEgg.css';

export const EasterEgg = ({sitePosition})=>{
    const showEaster = sessionStorage.getItem('clickEaster');

    const easterSound = useRef();
    const easter = useRef();

    const handleEaster = ()=>{
        sessionStorage.setItem('clickEaster', true);
        easter.current.style.display = 'none';
        easterSound.current.play();
    }

    return (
        <>
        {!showEaster && 
        <>
        <span ref={easter} onClick={handleEaster} className={`cuteHome-easter site-${sitePosition+1}`}></span>
        <audio ref={easterSound} id="cuteHome-easterSound" src="/pop.mp3"></audio>
        </>
        }
        </>
    )
}

EasterEgg.propTypes = {
    sitePosition: PropTypes.number.isRequired
}
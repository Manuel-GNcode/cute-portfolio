import { useRef } from 'react';
import PropTypes from 'prop-types';

export const EasterEgg = ({sitePosition})=>{
    const showEaster = sessionStorage.getItem('clickEaster');

    const easter = useRef();
    const handleEaster = ()=>{
        sessionStorage.setItem('clickEaster', true);
        easter.current.style.display = 'none';
    }

    return (
        <>
        {!showEaster && <span ref={easter} onClick={handleEaster} className={`cuteHome-easter site-${sitePosition+1}`}></span>}
        </>
    )
}

EasterEgg.propTypes = {
    sitePosition: PropTypes.number.isRequired
}
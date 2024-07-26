import './front.css';
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LeafFalling } from '../leafFalling/leafFalling';

export const Front = ({show, updateShow})=>{
    const cuteAvatar = useRef();
    const cuteText = useRef();
    const cuteFront = useRef();
    const cuteImg = useRef();

    const hideFront = ()=>{
        cuteText.current.style.opacity = '0';
        cuteAvatar.current.classList.add('hideAvatar');
        cuteImg.current.classList.add('zoomImg');

        setTimeout(() => {
            cuteFront.current.classList.add('hideFront');
        }, 900);
    }
    const showFront = () => {
        cuteFront.current.classList.remove('hideFront');
        setTimeout(() => {
            cuteText.current.style.opacity = '1';
            cuteAvatar.current.classList.remove('hideAvatar');
            cuteImg.current.classList.remove('zoomImg');
        }, 100);
    }

    const handleFront = ()=>{
        updateShow(false);
    }
    useEffect(()=>{
        if (show === false) hideFront();
        if (show === true) showFront();
    }, [show])

    return (
        <article ref={cuteFront} onClick={handleFront} id="cuteFront">
            <LeafFalling fall={!show} />
            <img width='3840' height='2160' ref={cuteImg} className='cuteFront-background' src="/home/home-background.webp" alt="background"/>
            <p ref={cuteText} className="cuteFront-text"><span className='cuteFront-point'></span> Click to Start <span className='cuteFront-point'></span></p>
            <figure ref={cuteAvatar} className="cuteFront-avatar">
                <img width='6714' height='1185' src="/home/home-avatar.webp" alt="Avatar" />
            </figure>
        </article>
    )
}

Front.propTypes = {
    show: PropTypes.bool,
    updateShow: PropTypes.func,
}
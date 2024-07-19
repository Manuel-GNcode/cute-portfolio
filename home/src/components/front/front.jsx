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
        // sessionStorage.setItem('first', true);

        setTimeout(() => {
            cuteFront.current.classList.add('hideFront');
        }, 900);
    }
    const showFront = () => {
        cuteFront.current.classList.remove('hideFront');
        // sessionStorage.setItem('first', false);
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
            <img ref={cuteImg} className='cuteFront-background' src="home/public/cute-background.png" alt="background"/>
            <p ref={cuteText} className="cuteFront-text"><span className='cuteFront-point'></span> Click to Start <span className='cuteFront-point'></span></p>
            <div ref={cuteAvatar} className="cuteFront-avatar">
                <img src="home/public/cute-avatar.png" alt="Avatar" />
            </div>
        </article>
    )
}

Front.propTypes = {
    show: PropTypes.bool,
    updateShow: PropTypes.func,
}
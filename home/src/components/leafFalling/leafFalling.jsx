import { useEffect } from 'react';
import './leafFalling.css';
import PropTypes from 'prop-types';

export const LeafFalling = ({fall})=>{
    const falling = ()=> {
        const leaf = document.createElement('span');
        const leafCtr = document.querySelector('.leafCtr');
        leaf.classList.add('leaf');
        leafCtr.appendChild(leaf);

        let leafSize = Math.random()*15;
        leaf.style.width = 10 + leafSize + 'px';
        leaf.style.left = Math.random()* innerWidth + 'px';

        setTimeout(() => {
            document.querySelector('.leafCtr').removeChild(leaf);
        }, 10000);
    };

    useEffect(()=>{
        const setFall = setInterval(() => {
            falling();
        }, 2000);

        if (fall == true) {
            clearInterval(setFall);
        }
        return (()=>{
            clearInterval(setFall);
        })
    }, [fall])

    return (
        <div className='leafCtr'></div>
    )
}

LeafFalling.propTypes = {
    fall: PropTypes.bool,
}
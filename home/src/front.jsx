import './front.css';

export const Front = ()=>{
    const hideFront = ()=>{
        const front = document.querySelector('#cuteFront');
        const avatar = document.querySelector('.cuteFront-avatar');
        const text = document.querySelector('.cuteFront-text');
        front.style.animation = 'hideFront .5s ease-out .4s forwards';
        avatar.style.animation = 'hideAvatar .4s ease-out forwards';
        text.style.opacity = '0';
    }

    return (
        <article onClick={hideFront} id="cuteFront">
            <img className='cuteFront-background' src="home/public/cute-background.jpg" alt="background" />
            <p className="cuteFront-text playwrite-es-deco-letter">Click to Start</p>
            <img className='cuteFront-avatar' src="home/public/cute-avatar.png" alt="Avatar" />
        </article>
    )
}
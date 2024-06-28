import './front.css';

export const Front = ()=>{
    const hideFront = ()=>{
        const front = document.querySelector('#cuteFront');
        const mark = document.querySelector('.cuteFront-mark');
        const avatar = document.querySelector('.cuteFront-avatar');
        front.style.animation = 'hideFront .4s ease-out .5s forwards';
        mark.style.animation = 'hideMark .4s cubic-bezier(1.000, -0.460, 1.000, 1.015) forwards';
        avatar.style.animation = 'hideAvatar .4s cubic-bezier(1.000, -0.460, 1.000, 1.015) forwards';
    }

    return (
        <article id="cuteFront">
            <section className="cuteFront-mark">
                <div className='cuteFront-mark-plate'>
                    <img className='cuteFront-mark-logo' src="" alt="Logo" />
                </div>
                <button onClick={hideFront} type='button' className='cuteFront-mark-btn'>START</button>
            </section>

            <img className='cuteFront-avatar' src="" alt="Avatar" />
        </article>
    )
}
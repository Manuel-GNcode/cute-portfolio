import './contact.css';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

let position = 50;

export default function Contact({show, updateShow}) {
    const [isCatching, setIsCatching] = useState(false);
    const btnLeft = useRef();
    const btnRight = useRef();
    const btnPush = useRef();
    const garra = useRef();
    const quote = useRef();
    const fail = useRef();
    const cuteContact = useRef();
    useEffect(()=>{
        if (show) cuteContact.current.style.left = '0%';
        else cuteContact.current.style.left = '100%';
    }, [show]);

    const handleContact = ()=>{
        updateShow(false);
    }

    const handleMachine = ()=>{
        if (isCatching) return;
        setIsCatching(true);
        const getReward = Math.random() > 1/2;
        garra.current.style.animation = 'goDown 4s ease-in-out';
        fail.current.style.animation = '';
        setTimeout(() => {
            garra.current.style.animation = '';
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
        <>
        <article ref={cuteContact} id="cuteContact">
            <p onClick={handleContact} className='cuteContact-workPage'><span className='homePage-arrow'></span>Works</p>
            <section className="cuteContact-main">
                <div className="cuteContact-message">
                    <span className="cuteContact-flower"></span>
                    <span className="cuteContact-light"></span>
                    <h1 className='cuteContact-title'>Contact</h1>
                    <form className='cuteContact-form' action="#">
                        <label className='cuteContact-input'><p>Subject:</p><input name='name' type="text" /></label>
                        <label className='cuteContact-input'><p>E-mail:</p> <input name='email' type="email" /></label>
                        <label className='cuteContact-input'><p>Name:</p><input name='name' type="text" /></label>
                        <label className='cuteContact-textarea'><p>Message</p> <textarea name="message"></textarea></label>
                        <button className='cuteContact-submit' type='submit'>Send</button>
                    </form>
                </div>
            </section>

            <section className="cuteContact-bottom">
                <div className="cuteContact-tv">
                    <img className='contact-tv' src="/cuteContact-tv.png" alt="TV with logo" />
                    <img className='contact-instagram' src="/cuteContact-bookinstagram.png" alt="Instagram" />
                    <img className='contact-cara' src="/cuteContact-bookcara.png" alt="Cara" />
                    <img className='contact-arstation' src="/cuteContact-bookarstation.png" alt="Arstation" />
                    <img className='contact-kofi' src="/cuteContact-bookkofi.png" alt="Ko-fi" />
                </div>
                <div className='cuteContact-ventilator'>
                    <img src="cuteContact-ventilator.png" alt="Ventilator" />
                </div>

                <div className='cuteContact-food'>
                    <img src="cuteContact-food.png" alt="food" />
                </div>

                <div className='cuteContact-toys'>
                    <img src="cuteContact-toys.png" alt="toys" />
                </div>

                <div className='cuteContact-bookglass'>
                    <img src="cuteContact-bookglass.png" alt="food" />
                </div>

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
            </section>
        </article>
        </>
    )
}

Contact.propTypes = {
    show: PropTypes.bool,
    updateShow: PropTypes.func
}
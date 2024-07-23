import './contact.css';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { Form } from '../form/form';
import { Game } from '../game/game';
export default function Contact({show, updateShow}) {
    const cuteContact = useRef();
    useEffect(()=>{
        if (show) cuteContact.current.style.left = '0%';
        else cuteContact.current.style.left = '100%';
    }, [show]);

    const handleContact = ()=>{
        updateShow(false);
    }

    return (
        <>
        <article ref={cuteContact} id="cuteContact">
            <p onClick={handleContact} className='cuteContact-workPage'><span className='homePage-arrow'></span>Works</p>
            <section className="cuteContact-main">
                <Form />
            </section>

            <section className="cuteContact-bottom">
                <div className="cuteContact-tv">
                    <img className='contact-tv' src="/cuteContact-tv.png" alt="TV with logo" />
                    <a className='contact-instagram' href='http://instagram.com/siriuschan_/' target='_blank' aria-label='Link de Instagram'>
                        <img src="/cuteContact-bookinstagram.png" alt="Instagram" />
                    </a>
                    <a className='contact-cara' href='http://cara.app/siriuschan' target='_blank' aria-label='Link de Cara'>
                        <img src="/cuteContact-bookcara.png" alt="Cara" />
                    </a>
                    <a className='contact-arstation' href='http://artstation.com/siriuschan' target='_blank' aria-label='Link de Arstation'>
                        <img src="/cuteContact-bookarstation.png" alt="Arstation" />
                    </a>
                    <a className='contact-kofi' href='http://ko-fi.com/siriuschan' target='_blank' aria-label='Link de Ko-fi'>
                        <img src="/cuteContact-bookkofi.png" alt="Ko-fi" />
                    </a>
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
                <Game />
            </section>
        </article>
        </>
    )
}

Contact.propTypes = {
    show: PropTypes.bool,
    updateShow: PropTypes.func
}
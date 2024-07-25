import './contact.css';
import PropTypes from 'prop-types';
import { useEffect, useRef, lazy, Suspense, useState } from 'react';
import { Form } from '../form/form';
import { Game } from '../game/game';
const Credits = lazy(()=>import('../credits/credits'))
export default function Contact({show, updateShow}) {
    const [showCredits, setShowCredits] = useState(false);
    const cuteContact = useRef();
    useEffect(()=>{
        if (show) cuteContact.current.style.left = '0%';
        else cuteContact.current.style.left = '100%';
    }, [show]);

    const handleContact = ()=>{
        updateShow(false);
    }
    const handleCredits = ()=>{
        setShowCredits(true);
    }
    return (
        <article ref={cuteContact} id="cuteContact">
            <p onClick={handleContact} className='cuteContact-workPage'><span className='homePage-arrow'></span>Works</p>
            {showCredits && 
            <Suspense fallback={<h2>Loading...</h2>}>
                <Credits updateCredits={setShowCredits}/>
            </Suspense>}
            <section className="cuteContact-main">
                <Form />
            </section>

            <section className="cuteContact-bottom">
                <div className="cuteContact-tv">
                    <img width='924' height='673' className='contact-tv' src="contact/contact-tv.webp" alt="TV with logo" />
                    <a className='contact-instagram' href='http://instagram.com/siriuschan_/' target='_blank' aria-label='Link de Instagram'>
                        <img width='845' height='116' src="contact/contact-instagram.webp" alt="Instagram" />
                    </a>
                    <a className='contact-cara' href='http://cara.app/siriuschan' target='_blank' aria-label='Link de Cara'>
                        <img width='846' height='90' src="contact/contact-cara.webp" alt="Cara" />
                    </a>
                    <a className='contact-arstation' href='http://artstation.com/siriuschan' target='_blank' aria-label='Link de Arstation'>
                        <img width='846' height='94' src="contact/contact-artstation.webp" alt="Arstation" />
                    </a>
                    <a className='contact-kofi' href='http://ko-fi.com/siriuschan' target='_blank' aria-label='Link de Ko-fi'>
                        <img width='835' height='119' src="contact/contact-kofi.webp" alt="Ko-fi" />
                    </a>
                </div>
                <figure className='cuteContact-ventilator'>
                    <img width='313' height='620' src="contact/contact-ventilator.webp" alt="Ventilator" />
                </figure>

                <figure className='cuteContact-food'>
                    <img width='903' height='287' src="contact/contact-food.webp" alt="food" />
                </figure>

                <figure className='cuteContact-toys'>
                    <img width='977' height='573' src="contact/contact-dolls.webp" alt="toys" />
                </figure>

                <figure onClick={handleCredits} className='cuteContact-bookglass'>
                    <img width='766' height='343' src="contact/contact-bookGlasses.webp" alt="food" />
                </figure>
                <Game />
            </section>
        </article>
    )
}

Contact.propTypes = {
    show: PropTypes.bool,
    updateShow: PropTypes.func
}
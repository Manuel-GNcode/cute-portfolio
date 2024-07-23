import './home.css';
import { Marquee } from '../marquee/marquee';
import { randomSite } from '../../constants/constants';
import { EasterEgg } from '../easterEgg/easterEgg'
import { Modal } from '../modal/modal';
import { useState, useEffect, useRef } from 'react';
import { Description } from '../description/description';
import { Front } from '../front/front';
import Contact from '../contact/contact';

export default function Home() {
    const [showModal, setShowModal] = useState({visible: false, id: null});
    const [showHome, setShowHome] = useState(true);
    const [showContact, setShowContact] = useState(false);
    const handleShowHome = ()=>{setShowHome(true)};
    const handleShowContact = ()=>{setShowContact(true)};
    const cuteHome = useRef();

    useEffect(()=>{
        if (showContact) cuteHome.current.style.left = '-100%';
        else cuteHome.current.style.left = '0%';
    }, [showContact])

    return (
        <>
        <Front show={showHome} updateShow={setShowHome} />
        <article ref={cuteHome} id='cuteHome'>
            <p onClick={handleShowHome} className='cuteHome-homePage'><span className='homePage-arrow'></span>Home</p>
            <p onClick={handleShowContact} className='cuteHome-contactPage'>Contact<span className='homePage-arrow'></span></p>
            <section className='cuteHome-main'>
                {randomSite==2 && <EasterEgg sitePosition={randomSite}/> }
                <span className='cuteHome-fridge'>
                    {randomSite==0 && <EasterEgg sitePosition={randomSite} /> }
                </span>
                
                <div className='cuteHome-details'>
                    {randomSite==1 && <EasterEgg sitePosition={randomSite} />}
                    <div className="cuteHome-furnitures">
                        <a target='_blank' href='http://ko-fi.com/siriuschan' className="cuteHome-kofi" aria-label='Link de ko-fi'></a>
                        <span className="cuteHome-microondas"></span>
                        <span className="cuteHome-plates"></span>
                    </div>
                    <span className="cuteHome-table"></span>
                </div>

                {showModal.visible && <Modal id={showModal.id} updateModal={setShowModal} />}

                <Description show={showModal}/>

                <figure className="cuteHome-avatarCtr">
                    <img className='cuteHome-avatar' src="/cuteHome-avatar.png" alt="Avatar" />
                </figure>
            </section>

            <section className='cuteHome-bottom'>
                <Marquee updateModal={setShowModal} />
            </section>

        </article>
        <Contact  show={showContact} updateShow={setShowContact}/>
        </>
    );
}
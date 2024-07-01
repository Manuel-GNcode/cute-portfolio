import './home.css';
import { Marquee } from './src/components/marquee/marquee';
import { randomSite } from './src/constants/constants';
import { EasterEgg } from './src/components/easterEgg/easterEgg';
import { Modal } from './src/components/modal/modal';
import { useState } from 'react';
// import { Front } from './src/components/front/front';

export const Home = ()=>{
    const [showModal, setShowModal] = useState({visible: false, id: null});

    return (
        <>
        {/* <Front /> */}
        <article id='cuteHome'>
            <section className='cuteHome-main'>
                {randomSite==2 && <EasterEgg sitePosition={randomSite}/> }
                <span className='cuteHome-fridge'>
                    {randomSite==0 && <EasterEgg sitePosition={randomSite} /> }
                    Fridge
                </span>
                <div className='cuteHome-details'>
                    {randomSite==1 && <EasterEgg sitePosition={randomSite} />}
                    <span className="cuteHome-kofi">Ko-fi</span>
                    <span className="cuteHome-table">Table</span>
                </div>

                {showModal.visible && <Modal id={showModal.id} updateModal={setShowModal} />}

                <img className='cuteHome-avatar' src="" alt="Avatar" />
            </section>

            <section className='cuteHome-bottom'>
                <Marquee updateModal={setShowModal} />
            </section>

        </article>
        </>
    );
}
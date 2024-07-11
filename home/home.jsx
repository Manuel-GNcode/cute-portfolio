import './home.css';
import { Marquee } from './src/components/marquee/marquee';
import { randomSite } from './src/constants/constants';
import { EasterEgg } from './src/components/easterEgg/easterEgg';
import { Modal } from './src/components/modal/modal';
import { useState } from 'react';
import { Description } from './src/components/description/description';
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
                </span>
                
                <div className='cuteHome-details'>
                    {randomSite==1 && <EasterEgg sitePosition={randomSite} />}
                    <div className="cuteHome-furnitures">
                        <span className="cuteHome-kofi"></span>
                        <span className="cuteHome-microondas"></span>
                        <span className="cuteHome-plates"></span>
                    </div>
                    <span className="cuteHome-table"></span>
                </div>

                {showModal.visible && <Modal id={showModal.id} updateModal={setShowModal} />}

                <Description show={showModal}/>

                <img className='cuteHome-avatar' src="/home/public/cute-avatarHome.png" alt="Avatar" />
            </section>

            <section className='cuteHome-bottom'>
                <Marquee updateModal={setShowModal} />
            </section>

        </article>
        </>
    );
}
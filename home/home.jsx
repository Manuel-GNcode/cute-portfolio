import './home.css';
import { Marquee } from './src/components/marquee/marquee';
import { randomSite } from './src/constants/constants';
import { EasterEgg } from './src/components/easterEgg/easterEgg';
import { Front } from './src/components/front/front';

export const Home = ()=>{

    return (
        <>
        <Front />
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
                <img className='cuteHome-avatar' src="" alt="Avatar" />
            </section>

            <section className='cuteHome-bottom'>
                <Marquee />
            </section>

        </article>
        </>
    );
}
import './home.css';
import { Marquee } from './src/components/marquee/marquee';
// import { Front } from './src/components/front/front';

export const Home = ()=>{

    return (
        <>
        {/* <Front /> */}
        <article id='cuteHome'>

            <section className='cuteHome-main'>
                <span className='cuteHome-fridge'>Fridge</span>
                <div className='cuteHome-details'>
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
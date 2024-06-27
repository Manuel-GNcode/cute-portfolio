import './home.css';

export const Home = ()=>{
    return (
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
                <div className="cuteHome-slide">
                    <span className="cuteHome-project">plato 1</span>
                    <span className="cuteHome-project">plato 2</span>
                    <span className="cuteHome-project">plato 3</span>
                    <span className="cuteHome-project">plato 4</span>
                </div>
            </section>

        </article>
    );
}
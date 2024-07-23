import { Link } from 'react-router-dom';

export const Error = ()=>{
    return (
        <section className="cuteError">
            <h2>La cagaste pa'</h2>
            <Link to='/home'>Volver al Home</Link>
        </section>
    )
}
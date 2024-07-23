import { Link } from 'react-router-dom';
import './error.css'

export const Error = ()=>{
    return (
        <section className="cuteError">
            <figure className='cuteError-img'>
                <img src="/cuteError-error.png" alt="Error image" />
            </figure>
            <article className='cuteError-content'>
                <h1>404</h1>
                <h2>Lost in bronze?</h2>
                <p>Something is good to be lost, but not on this occasion.</p>
                <p>Return to our home page</p>
                <Link className='cuteError-link' to='/home'>
                    <p>Home</p>
                    <span></span>
                </Link>
            </article>
        </section>
    )
}
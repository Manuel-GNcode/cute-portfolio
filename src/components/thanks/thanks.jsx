import { Link } from "react-router-dom"

export const Thanks = ()=>{
    return (
        <section className="cuteThanks">
            <h2>Gracias, bro.</h2>
            <Link to='/home'>Volver al Home</Link>
        </section>
    )
}
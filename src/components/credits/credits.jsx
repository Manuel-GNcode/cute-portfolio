import './credits.css';
import PropTypes from 'prop-types';

const Credits = ({updateCredits})=>{
    const handleCredits = ()=>{
        updateCredits(false);
    }
    return (
        <footer onClick={handleCredits} className='cuteCredits'>
            <article className='cuteCredits-book'>
                <span className='cuteCredits-cherry'></span>
                <section className='cuteCredits-section'>
                    <div className='cuteCredits-authors'>
                        <span className='cuteCredits-author'>
                            <p>Designed by:</p>
                            <img width='376' height='163' src="contact/credits/credits-lau.webp" alt="Lau logo" />
                        </span>
                        <span className='cuteCredits-author'>
                            <p>Developed by:</p>
                            <img width='476' height='69' src="contact/credits/credits-gncode.webp" alt="< GNcode /> logo" />
                        </span>
                    </div>
                    <p>Illustrations made by a human.</p>
                    <p>Developed with React and JavaScript.</p>
                </section>

                <section className='cuteCredits-section'>
                    <figure className='cuteCredits-employee'>
                        <img width='390' height='563' src="contact/credits/credits-sticker.webp" alt="Sticker" />
                        <caption>Employee of the month</caption>
                    </figure>
                    <h2>Thanks for watching!</h2>
                </section>
            </article>
        </footer>
    )
}
Credits.propTypes = {
    updateCredits: PropTypes.func,
}
export default Credits;
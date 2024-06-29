import './marquee.css';

export const Marquee = () => {
    const nextPlate = ()=>{
        const slider = document.querySelector('.cuteHome-slide');
        let firstSection = document.querySelectorAll('.cuteHome-project')[0];
        slider.style.marginLeft = '-50%';
        slider.style.transition = 'margin .3s'
        setTimeout(() => {
            slider.insertAdjacentElement('beforeend', firstSection);
            slider.style.marginLeft = '-25%';
            slider.style.transition = 'none'
        }, 300);
    }
    const prevPlate = ()=>{
        const slider = document.querySelector('.cuteHome-slide');
        let slideSection = document.querySelectorAll('.cuteHome-project');
        let firstSection = slideSection[slideSection.length - 1];
        slider.style.marginLeft = '0%';
        slider.style.transition = 'margin .3s'
        setTimeout(() => {
            slider.insertAdjacentElement('afterbegin', firstSection);
            slider.style.marginLeft = '-25%';
            slider.style.transition = 'none'
        }, 300);
    }

    return (
        <>
            <button onClick={prevPlate} className="cuteHome-btn btn-left">Left</button>
            <button onClick={nextPlate} className="cuteHome-btn btn-right">Right</button>
            <div className="cuteHome-slideCtr">
                <div className="cuteHome-slide">
                    <span className="cuteHome-project">
                        <p>plato 8</p>
                    </span>
                    <span className="cuteHome-project">
                        <p>plato 1</p>
                    </span>
                    <span className="cuteHome-project">
                        <p>plato 2</p>
                    </span>
                    <span className="cuteHome-project">
                        <p>plato 3</p>
                    </span>
                    <span className="cuteHome-project">
                        <p>plato 4</p>
                    </span>

                    <span className="cuteHome-project">
                        <p>plato 5</p>
                    </span>
                    <span className="cuteHome-project">
                        <p>plato 6</p>
                    </span>
                    <span className="cuteHome-project">
                        <p>plato 7</p>
                    </span>
                </div>
            </div>
        </>
    )
}

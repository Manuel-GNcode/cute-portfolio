import './marquee.css';
import PropTypes from 'prop-types';
import { ilustrations } from '../../constants/constants';
import { useState, useEffect } from 'react';

export const Marquee = ({updateModal, setIsLoaded}) => {
    const [localModal, setLocalModal] = useState(null);
    useEffect(()=>{
        if (localModal !== null) {
            updateModal(localModal)
        }

        const root = document.querySelector(':root');
        root.style.setProperty('--projects', ilustrations.length);

    }, [localModal, updateModal])

    const nextPlate = ()=>{
        const slider = document.querySelector('.cuteHome-slide');
        let firstSection = document.querySelectorAll('.cuteHome-project')[0];
        slider.style.marginLeft = 'calc(100%/var(--visibleProjects) * -2)';
        slider.style.transition = 'margin .3s'
        setTimeout(() => {
            slider.insertAdjacentElement('beforeend', firstSection);
            slider.style.marginLeft = 'calc(100%/var(--visibleProjects) * -1)';
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
            slider.style.marginLeft = 'calc(100%/var(--visibleProjects) * -1)';
            slider.style.transition = 'none'
        }, 300);
    }

    const renderIlustrations = ()=>{
        const handleScale = (item)=>{
            setIsLoaded(false);
            setLocalModal({visible:true, id:item.target.id.slice(-1)});
            document.querySelectorAll('.cuteHome-project').forEach(project=>{
                project.classList.remove('active');
            })
            item.target.classList.add('active');
        }
        const ctrIlustrations = ilustrations.map((ilustration)=>{
            return (
                <span id={'project-'+ilustration.id} onClick={handleScale} key={ilustration.id} className="cuteHome-project">
                    <img className={'cuteHome-project-img '} src={'/'+ilustration.url} alt={ilustration.name} />
                </span>
            )
        })
        return ctrIlustrations;
    }

    return (
        <div className='cuteHome-marquee'>
            <button onClick={prevPlate} className="cuteHome-btn btn-left"></button>
            <button onClick={nextPlate} className="cuteHome-btn btn-right"></button>
            <div className="cuteHome-slideCtr">
                <div className="cuteHome-slide">
                    {renderIlustrations()}
                </div>
            </div>
        </div>
    )
}

Marquee.propTypes = {
    updateModal: PropTypes.func,
    setIsLoaded: PropTypes.func,
}
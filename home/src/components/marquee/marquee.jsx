import './marquee.css';
import PropTypes from 'prop-types';
import { ilustrations } from '../../constants/constants';
import { useState, useEffect } from 'react';

export const Marquee = ({updateModal}) => {
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
        const ctrIlustrations = ilustrations.map((ilustration)=>{
            const handleScale = (item)=>{
                setLocalModal({visible:true, id:ilustration.id});
                document.querySelectorAll('.cuteHome-project').forEach(project=>{
                    project.classList.remove('active');
                })
                item.target.classList.add('active');
            }

            return (
                <span onClick={handleScale} key={ilustration.id} className="cuteHome-project">
                    <p>{ilustration.name}</p>
                </span>
            )
        })
        return ctrIlustrations;
    }

    return (
        <>
            <button onClick={prevPlate} className="cuteHome-btn btn-left">Left</button>
            <button onClick={nextPlate} className="cuteHome-btn btn-right">Right</button>
            <div className="cuteHome-slideCtr">
                <div className="cuteHome-slide">
                    {renderIlustrations()}
                </div>
            </div>
        </>
    )
}

Marquee.propTypes = {
    updateModal: PropTypes.func
}
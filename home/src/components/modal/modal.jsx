import './modal.css';
import { ilustrations } from '../../constants/constants';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const Modal = ({id, updateModal}) => {
    const [zoom, setZoom] = useState(false);
    const changeZoom = ()=>{
        setZoom(!zoom);
    }

    useEffect(()=>{
        const cuteCtr = document.querySelector('.modal-ctr');
        cuteCtr.style.setProperty('--display', 'none');
        cuteCtr.style.setProperty('cursor', 'var(--zoomin), zoom-in');

        const handleZoom = (e)=>{
            let pointer = {
                x: (e.offsetX * 100) / cuteCtr.offsetWidth,
                y: (e.offsetY * 100) / cuteCtr.offsetHeight
            }
            cuteCtr.style.setProperty('--zoom-x', pointer.x + '%');
            cuteCtr.style.setProperty('--zoom-y', pointer.y + '%');
        }
        const leaveZoom = ()=>{
            setZoom(false);
        }

        if (zoom) {
            cuteCtr.style.setProperty('--display', 'block');
            cuteCtr.style.setProperty('cursor', 'var(--zoomout), zoom-out');
            cuteCtr.addEventListener('mousemove', handleZoom)
            cuteCtr.addEventListener('mouseout', leaveZoom)
        }

        return (()=>{
            cuteCtr.removeEventListener('mousemove', handleZoom)
            cuteCtr.removeEventListener('mouseout', leaveZoom)
        })
    }, [zoom])
    
    const styleModal = {
        '--zoom-x': '0%',
        '--zoom-y': '0%',
        '--display': 'none',
        '--url': `url(/home/public/${ilustrations[id].src})`
    }

    const [localModal, setLocalModal] = useState(null);
    useEffect(()=>{
        if (localModal !== null) {
            updateModal(localModal)
        }

    }, [localModal, updateModal])

    const handleScale = ()=>{
        setLocalModal({visible:false, id:null});
        document.querySelectorAll('.cuteHome-project').forEach(project=>{
            project.classList.remove('active');
        })
    }

    return (
        <div className="cuteHome-modal">
            <button onClick={handleScale} type='button' className='cuteHome-modal-btn'></button>
            <div onClick={changeZoom} className="modal-ctr" style={styleModal}>
                <img className='modal-ilustration' src={'home/public/'+ilustrations[id].src} alt={ilustrations[id].name} />
            </div>
        </div>
    );
};

Modal.propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    updateModal: PropTypes.func
}
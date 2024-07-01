import './modal.css';
import { ilustrations } from '../../constants/constants';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const Modal = ({id, updateModal}) => {
    const [localModal, setLocalModal] = useState(null);
    useEffect(()=>{
        if (localModal !== null) {
            updateModal(localModal)
        }

    }, [localModal, updateModal])

    return (
        <div className="cuteHome-modal">
            <button onClick={()=>setLocalModal({visible:false, id:null})} type='button' className='cuteHome-modal-btn'>x</button>
            <p>{ilustrations[id].name}</p>
        </div>
    );
};

Modal.propTypes = {
    id: PropTypes.number,
    updateModal: PropTypes.func
}
import './description.css';
import Proptypes from 'prop-types'
import { ilustrations } from '../../constants/constants';

export const Description = ({show}) => {
    return (
        <span className="cuteHome-description">
            <p className="description-title">{show.visible? 'Description': 'Welcome'}</p>
            
            {show.visible &&
            <>
            <span className="description-icon"></span>
            <span className="description-between"></span>
            </>
            }

            <p className="description-name">
                {show.visible ? ilustrations[show.id].description:
                'Select a food you want to try'}
            </p>
        </span>
    )
}

Description.propTypes = {
    show: Proptypes.object
}
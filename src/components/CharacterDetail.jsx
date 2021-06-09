import React from 'react';
import "../assets/styles/components/CharacterDetail.scss"
import {BASE_PATH_IMG} from '../utils/constants';

const CharacterDetail = (props) => {
    const { data } = props;
    const {title,overview, backdrop_path } = data;

    return(
        <div className="characterDetail">
            <img className="characterDetail-img" src={`${BASE_PATH_IMG}${backdrop_path}`} alt="detail movie"/>
            <div className="characterDetail__container">
                <h2 className="characterDetail-name">{title}</h2>
                <p className="characterDetail__item">
                    <span className="characterDetail__item-type">Información general:</span>
                    {' '}
                    {overview}
                </p>
            </div>
        
        </div>
    )
}

export default CharacterDetail;
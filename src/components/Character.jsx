import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {setFavorite, deleteFavorite} from "../actions";
import "../assets/styles/components/Character.scss";
import {ReactComponent as SVGStar} from "../assets/static/icons/star.svg";
import CharacterDetail from "./CharacterDetail";
import Modal from "./Modal";
import {BASE_PATH_IMG} from '../utils/constants';

const Character = (props) => {
   const [modal, setModal] = useState(false);
    const [favorite, setFavorite] = useState(false);
  
  //console.log(props)
    // props
    const { data, favoriteCharacters } = props;
    const { id, poster_path ,original_language, title,popularity,release_date, vote_count} = data;

    const handleCloseModal = () => {
      setModal(false);
    };
  
    const handleOpenModal = () => {
      setModal(true);
    };
  
    const handleSetFavorite = () => {
      props.setFavorite({ data });
      setFavorite(true);
    };
  
    const handleDeleteFavorite = (itemId) => {
      props.deleteFavorite(itemId);
      setFavorite(false);
    };

    const isFavorite = () => {
       const result = favoriteCharacters.filter(
        (favoriteCharacter) => favoriteCharacter.data.id === id
      );
      if (result.length) {
        setFavorite(true);
      }
    };
    useEffect(() => {
       isFavorite();
    });

    return(
        <div className="character">
            <img className="character__img" src={`${BASE_PATH_IMG}${poster_path}`} alt="movie" />
            <div className="character__details">
            <h2 className="character__details-name">
            {title}
            </h2>
            { favorite ? 
                <SVGStar onClick={() => handleDeleteFavorite(id)} className="character__details-star favorite" /> :
                <SVGStar onClick={handleSetFavorite} className="character__details-star noFavorite"/>}
            <p
                className="character__details__item"
            >
            <span className="character__details__item-type">Fecha:</span>
            {' '}
            {release_date}
            </p>

            <p
                className="character__details__item"
            >
            <span className="character__details__item-type">Idioma Original:</span>
            {' '}
            {original_language}
            </p>

            <p
                className="character__details__item"
            >
            <span className="character__details__item-type">Número de votos:</span>
            {' '}
            {vote_count}
            </p>

            <p
                className="character__details__item"
            >
            <span className="character__details__item-type">Popularidad:</span>
            {' '}
            {popularity}
            </p>
            
            <p onClick={handleOpenModal} className="character__details__item-more">
                More details...
            </p>
            </div>
            <Modal isOpen={modal} onClose={handleCloseModal}>
                <CharacterDetail data={data} />
            </Modal>
          </div>
    );
}

// prototype: components documentation
  Character.propTypes = {
    data: propTypes.object,
  };
  
  // Native functions react-redux (HOC)
  const mapStateToProps = (state) => {
    return {
      favoriteCharacters: state.favoriteCharacters,
    };
  };

const mapDispatchToProps = {
    setFavorite, 
    deleteFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);

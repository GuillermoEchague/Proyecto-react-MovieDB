import React from "react";
import {connect} from "react-redux";
import "../assets/styles/components/FavoriteList.scss";
import Movie from "./Movie";
import Empty from "./Empty";

const FavoriteList = (props) => {
    const {favoriteMovies} = props;

    return (
        <div className="favoriteList">
            {!favoriteMovies.length ? (
                <Empty />
            ) : (
                favoriteMovies.map((movie) => (
                    <Movie key={movie.data.id} data={movie.data}/>
                ))
            )}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        favoriteMovies: state.favoriteMovies,
        
    };
};

export default connect(mapStateToProps, null)(FavoriteList);
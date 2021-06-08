import React, {useState, useEffect} from "react";
import axios from "axios";
import "../assets/styles/components/MovieList.scss"
import Movie from "./Movie";
import Error from "./Error";
import Loader from "./Loader";
import {API_HOST, API_KEY, LANG} from '../utils/constants';


const MovieList = () => { 
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getMovies(page=1) {
        try {
            const response = await axios.get(`${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`);
            const result = response.data.results;
            setMovies(result);
            setLoading(false);
            setError(false);
            
        } catch (error) {
             console.log(error);
            setLoading(false);
            setError(error);
            
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="movieList">
        {loading ? (
            <Loader />
        ): error ? (
            <Error/>
        ): (
            movies.map((movie) => (
                <Movie key={movie.id} data={movie}/>
            ))
        )}
        </div>
    );
};

export default MovieList;
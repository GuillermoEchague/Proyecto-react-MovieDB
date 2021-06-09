import {useState} from "react";
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage" ;
import {API_HOST, API_KEY, LANG} from '../utils/constants';

const useGetCharacters = () => {
    const [characters, setCharacters] = useLocalStorage('characters', '')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    async function getCharacters(page=1) {
        try {
            const response = await axios.get(`${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`);
            const result = response.data.results;
            setCharacters(result);
            setLoading(false);
            setError(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(error);
        }
    }

return { characters, loading, error, getCharacters };


};

export default useGetCharacters;
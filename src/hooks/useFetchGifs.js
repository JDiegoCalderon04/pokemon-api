import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState( true );


    const getImages = async() => {
        const newPokemon = await getGifs( category );
        setPokemon(newPokemon);
        setIsLoading(false);
    }

    useEffect( () => {
       getImages();
      }, [])


    return{
        pokemon,
        isLoading
    }

}

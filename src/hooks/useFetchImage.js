import { useEffect, useState } from 'react';
import { getPokemon } from '../helpers/getPokemon';

export const useFetchImage = ( category ) => {

    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState( true );


    const getImage = async() => {
        const newPokemon = await getPokemon( category );
        setPokemon(newPokemon);
        setIsLoading(false);
    }

    useEffect( () => {
       getImage();
      }, [])


    return{
        pokemon,
        isLoading
    }

}

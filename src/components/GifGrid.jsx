import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ( { category } ) => {

    const { pokemon, isLoading } = useFetchGifs( category );
    category = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            

            <div className="card-grid">
                {
                        <GifItem 
                            key={ pokemon.id }
                            { ...pokemon }
                        />

                }

            </div>
    
        </>
  )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired,
}

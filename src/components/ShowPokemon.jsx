import { useFetchImage } from '../hooks/useFetchImage';
import PropTypes from 'prop-types';
import image from "../assets/NotFound.png";

export const ShowPokemon = ( { category } ) => {
    
    const prueba = () => console.log("hola");
    const { pokemon, isLoading } = useFetchImage( category );
    category = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
    return (
        <>
            {
                isLoading && (
                    <div className="card-grid">
                        {
                            <div className="card">
                                <h4>Pokemon no encontrado</h4>,
                                <img src={image} width="350" height="200"/>
                            </div>
                        }
                    </div>
                )
            }

            {
                !isLoading && (
                    
                    <div className="card-grid">
                        
                        {
                            <div className="card">
                                <div ><h2>{ category }</h2></div>
                                <img src={ pokemon.img_url } 
                                alt={ pokemon.name } 
                                width="250" 
                                height="250" /> 
                                <h3><b>Estadisticas</b></h3>
                                <p>Nombre: { category } </p>
                                <p>Numero de Pokemon: <b>{ pokemon.id }</b> </p>
                                <p>Peso: { pokemon.weight } </p>
                                <p>Altura: { pokemon.height } </p>
                                <p>Experiencia base: { pokemon.base_experience } </p>
                                <button type="button" className="btn btn-warning" onClick={prueba}>Favorito</button>
                            </div>
        
                        }
        
                    </div>
            
                )
            }
        </>
  )
}

ShowPokemon.propTypes = {
    category : PropTypes.string.isRequired,
}

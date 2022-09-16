import { useFetchImage } from '../hooks/useFetchImage';
import PropTypes from 'prop-types';
import image from "../assets/NotFound.png";
import image2 from "../assets/FavoriteNotFound.png";
import { useState } from 'react';

export const ShowPokemon = ({ category, isShowingFav, noFavorites }) => {

    let list = JSON.parse(localStorage.getItem("Favorites"));
    let listName = JSON.parse(localStorage.getItem("FavoritesName"));
    if (list == null) {
        list = [];
        listName = [];
    }
    const { pokemon, isLoading } = useFetchImage(category);
    let showFavoriteButtonFlag = true;  
    if(list.includes(parseInt(category,10)) || listName.includes(category)) {
        showFavoriteButtonFlag = false;  
    }
    let [showFavoriteButton, setShowFavoriteButton] = useState(showFavoriteButtonFlag)     
    const addFavorite = (key, id) => {
        
        let list = JSON.parse(localStorage.getItem("Favorites"));
        let listName = JSON.parse(localStorage.getItem("FavoritesName"));
        if (list == null) {
            list = [];
            listName = [];
        }
        if (!list.includes(id)) {
            
            if (list.length == 0) {
                list = [id]
                listName = [key];
            } else {
                list = [id, ...list]
                listName = [key, ...listName]
            }
            localStorage.setItem("Favorites", JSON.stringify(list));   
            localStorage.setItem("FavoritesName", JSON.stringify(listName));   
        }
        showFavorite(id, list);
        swal({
            icon: 'warning',
            title: 'Favorito añadido',
            text: '¡Pokemon agregado a favoritos!',
          })
    }


    const deleteFavorite = (key, id) => {
        let list = JSON.parse(localStorage.getItem("Favorites"));
        let listName = JSON.parse(localStorage.getItem("FavoritesName"));
        const index = list.indexOf(id);

        if (index > -1) {
            list.splice(index, 1);
            listName.splice(index, 1);
            localStorage.setItem("Favorites", JSON.stringify(list));
            localStorage.setItem("FavoritesName", JSON.stringify(listName));
            showFavorite(id, list);
        }
        swal({
            icon: 'error',
            title: 'Favorito eliminado',
            text: '¡Pokemon eliminado de favoritos!',
        })
    }


    const showFavorite = (id, list) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i] == id) {
                setShowFavoriteButton(false);
                return;
            }
        }
        setShowFavoriteButton(true);
        return;
    }


    return (
        <>

            {
                isShowingFav && noFavorites &&(
                    <div className="card-grid">
                        {
                            <div className="card">
                                <h4>No tienes favoritos!</h4>
                                <img src={image2} width="280" height="220" />
                            </div>
                        }
                    </div>
                )

            }
            {
                isLoading && (
                    <div className="card-grid">
                        {
                            <div className="card">
                                <h4>Pokemon no encontrado</h4>
                                <img src={image} width="350" height="200" />
                            </div>
                        }
                    </div>
                )
            }

            {
                !isLoading && !noFavorites && (

                    <div className="card-grid">

                        {
                            <div className="card">
                                <div ><h2>{pokemon.name.charAt(0).toUpperCase()
                                    + pokemon.name.slice(1).toLowerCase()}
                                </h2></div>
                                <img src={pokemon.img_url}
                                    alt={pokemon.name}
                                    width="250"
                                    height="250" />
                                <h3><b>Estadisticas</b></h3>
                                <p>Nombre: {pokemon.name.charAt(0).toUpperCase()
                                    + pokemon.name.slice(1).toLowerCase()}
                                </p>
                                <p>Numero de Pokemon: <b>{pokemon.id}</b> </p>
                                <p>Peso: {pokemon.weight} </p>
                                <p>Altura: {pokemon.height} </p>
                                <p>Experiencia base: {pokemon.base_experience} </p>
                                {localStorage.localStorageState}
                                {showFavoriteButton && <button
                                    type="button"
                                    className="btn btn-warning mb-2"
                                    onClick={() => addFavorite(pokemon.name, pokemon.id)}>Añadir Favorito</button>}
                                {!showFavoriteButton && <button
                                    type="button"
                                    className="btn btn-danger mb-2"
                                    onClick={() => deleteFavorite(pokemon.name, pokemon.id)}>Eliminar Favorito</button>}

                            </div>

                        }

                    </div>
                )
            }
        </>
    )
}

ShowPokemon.propTypes = {
    category: PropTypes.string.isRequired,
}

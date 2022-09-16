import { useFetchImage } from '../hooks/useFetchImage';
import PropTypes from 'prop-types';
import image from "../assets/NotFound.png";
import { useState, useEffect } from 'react';
//import { LocalStorage } from '../hooks/useLocalStorage';

export const ShowPokemon = ({ category, isShowingFav }) => {

    console.log("FAV:" + isShowingFav);
    console.log("CAT:" + category);
    const { pokemon, isLoading } = useFetchImage(category);
    let [showFavoriteButton, setShowFavoriteButton] = useState(true)
    console.log(JSON.parse(localStorage.getItem("Favorites")))
    console.log(JSON.parse(localStorage.getItem("Button")))

    const addFavorite = (key, id) => {
        /*         localStorage.setItem("Favorites", JSON.stringify([]))
                localStorage.setItem("Button", JSON.stringify({})) */
        let list = JSON.parse(localStorage.getItem("Favorites"));
        if (list == null) {
            list = [];
        }
        if (!list.includes(id)) {
            //let listButton = JSON.parse(localStorage.getItem("Button"));
            if (list.length == 0) {
                list = [id]
            } else {
                list = [id, ...list]
            }
            //listButton[id.toString()] = false;
            localStorage.setItem("Favorites", JSON.stringify(list));
            //localStorage.setItem("Button", JSON.stringify(listButton));
        }
        showFavorite(id, list);
    }

    const deleteFavorite = (key, id) => {
        let list = JSON.parse(localStorage.getItem("Favorites"));
        //let listButton = JSON.parse(localStorage.getItem("Button"));
        const index = list.indexOf(id);
        if (index > -1) {
            list.splice(index, 1);
            //listButton[id.toString()] = true;
            localStorage.setItem("Favorites", JSON.stringify(list));
            //localStorage.setItem("Button", JSON.stringify(listButton));
            showFavorite(id, list);
        }
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
                isShowingFav &&
                <div className="card">
                    <h4>No tienes favoritos!</h4>,
                    <img src={image} width="350" height="200" />
                </div>

            }
            {
                isLoading && (
                    <div className="card-grid">
                        {
                            <div className="card">
                                <h4>Pokemon no encontrado</h4>,
                                <img src={image} width="350" height="200" />
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
                                    className="btn btn-warning"
                                    onClick={() => addFavorite(pokemon.name, pokemon.id)}>Añadir Favorito</button>}
                                {!showFavoriteButton && <button
                                    type="button"
                                    className="btn btn-danger"
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

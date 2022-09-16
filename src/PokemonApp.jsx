import { useState, useEffect } from 'react';
import { AddCategory } from './components/AddCategory';
import { ShowPokemon } from './components/ShowPokemon';
import image from "./assets/Title.png";

export const PokemonApp = () => {

    const [categories, setCategories] = useState(['bulbasaur']);
    let [isShowingFav, setIsShowingFav] = useState(false);;

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);

    }

    const resetFavorites = () => {
        localStorage.clear();
    }

    const showFavorites = () => {
        let list = JSON.parse(localStorage.getItem("Favorites"));
        if(list == null) {
            list = [];
        }
        list.map(String);
        localStorage.setItem("History", JSON.stringify(categories));
        setIsShowingFav(true);
        setCategories(list);
    }

    const getHistory = () => {
        let history = JSON.parse(localStorage.getItem("History"));
        if(history == null) {
            history = [];
        }
        history.map(String);
        setIsShowingFav(false);
        setCategories(history);
    }

    return (
        <>
            <div align="center">
                <h1>PokemonApp</h1>
                <img src={image} width="450" height="260" />
            </div>
            <div align="center" className='mt-3 mb-3'>
            {!isShowingFav && <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => showFavorites()}>Ver favoritos</button>}
            {isShowingFav && <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => getHistory()}>Volver al Historial</button>}
            
            <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => resetFavorites()}>Limpiar favoritos</button>
            
            </div>


            {!isShowingFav && <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />}


            {
                categories.map((category) => (
                    <ShowPokemon
                        key={category}
                        category={category.toString()}
                        isShowingFav={isShowingFav}
                    />
                ))
            }



        </>
    )
}

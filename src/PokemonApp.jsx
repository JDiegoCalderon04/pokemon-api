import { useState, useEffect } from 'react';
import { AddCategory } from './components/AddCategory';
import { ShowPokemon } from './components/ShowPokemon';
import image from "./assets/Title.png";
import swal from 'sweetalert';

export const PokemonApp = () => {

    const [categories, setCategories] = useState(['bulbasaur']);
    let [isShowingFav, setIsShowingFav] = useState(false);;

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) sameCategory(newCategory);
        setCategories([newCategory, ...categories]);
    }

    const resetFavorites = () => {
        localStorage.removeItem("Favorites");
        localStorage.removeItem("FavoritesName");
        swal({
            icon: 'info',
            title: 'Importante',
            text: '¡La lista de favoritos ha sido borrada!',
        })
        setCategories([]);
    }

    const resetHistory = () => {
        const newHistory = ['bulbasaur'];
        localStorage.setItem("History", JSON.stringify(newHistory));
        setCategories(newHistory)
        swal({
            icon: 'info',
            title: 'Importante',
            text: '¡El historial ha sido borrado!',
        })
    }

    const showFavorites = () => {
        let list = JSON.parse(localStorage.getItem("Favorites"));
        if (list == null) {
            list = [];
        }
        list.map(String);
        localStorage.setItem("History", JSON.stringify(categories));
        setIsShowingFav(true);
        setCategories(list);
    }

    const getHistory = () => {
        let history = JSON.parse(localStorage.getItem("History"));
        if (history == null) {
            history = [];
        }
        history.map(String);
        setIsShowingFav(false);
        setCategories(history);
    }

    const sameCategory = (newCategory) => {
        let idx = -1;
        for (let i = 0; i < categories.length; i++) {
            if (categories[i] == newCategory) {
                idx = i;
                break;
            }
        }
        let list = categories;
        list.splice(idx, 1);
        list = [newCategory, ...list];
        setCategories(list);
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

                {isShowingFav && <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => resetFavorites()}>Limpiar favoritos</button>}
            {!isShowingFav && <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => resetHistory()}>Limpiar historial</button>}
            
            
            </div>


            {!isShowingFav && <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />}

            {categories.length == 0 && 
            <ShowPokemon
            key={'bulbasaur'}
            category={'33'}
            isShowingFav={true}
            noFavorites={true}
            />}

            {categories.length > 0 &&
                categories.map((category) => (
                    <ShowPokemon
                        key={category}
                        category={category.toString()}
                        isShowingFav={false}
                        noFavorites={false}
                    />
                ))
            }



        </>
    )
}

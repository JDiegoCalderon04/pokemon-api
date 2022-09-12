import { useState, useEffect } from 'react';
import { AddCategory } from './components/AddCategory';
import { ShowPokemon } from './components/ShowPokemon';
import image from "./assets/Title.png";

export const PokemonApp = () => {

    const [categories, setCategories] = useState([ 'bulbasaur' ]);

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory)  ) return;
        setCategories( [ newCategory, ...categories ] );
        
    }

    return (
        <>
            <div align="center">
                <h1>PokemonApp</h1>
                <img src={image} width="350" height="200"/>
            </div>


            <AddCategory 
               onNewCategory = { value => onAddCategory(value) }
            />


            { 
                categories.map( ( category ) => (
                        <ShowPokemon 
                            key={ category } 
                            category={ category } 
                        />
                    ) )
            }
            


        </>
    )
}

import { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');
    
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (isNaN(parseInt(inputValue.trim(), 10)) && inputValue.trim().length <= 1 ) return;
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <div align="center">
        <form onSubmit={ onSubmit } aria-label="form" >  
            <input 
                type="text"
                placeholder="Buscar Pokemon por nombre o ID"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>

        </div>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,

}

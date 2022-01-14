import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputValueChange = (event) => {
        setinputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length < 2){
            return;
        }

        setCategories( cats => [inputValue,...cats]);
        setinputValue('');

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputValueChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

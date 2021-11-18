import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setinputValue] = useState(''); // '  '

    const handleInputChange = (e) =>{
        // console.log(e.target.value);
        setinputValue(e.target.value);

        console.log('handleInputChange llamado');
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if( inputValue.trim().length > 2){

            setCategories( cate => [ inputValue, ...cate] );
            setinputValue('');
        }

    }

    return (
        <form onSubmit = {handleSubmit}>
            <p> { inputValue}</p>
           <input
                 type="text"
                 value = {inputValue}
                 onChange = {handleInputChange}

           />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

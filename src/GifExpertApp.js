// rafc
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( {defaultCategories = []}) => {

    // const categories = ['One Punch','Samurai X','Dragon Ball'];
    //Hook de useState - 
    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories);


    // const handleAdd = () =>{
    //     setcategories( [...categories, 'HunterXhunter'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= {setCategories} />
            <hr />

            {/* <button onClick={handleAdd}> Agregar</button> */}

            <ol>
                {
                    categories.map( category =>(
                        <GifGrid 
                        key = {category}
                        category= {category} />
                         ) )
                }
            </ol>
        </>
    )
}


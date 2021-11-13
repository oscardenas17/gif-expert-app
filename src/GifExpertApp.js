// rafc
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    // const categories = ['One Punch','Samurai X','Dragon Ball'];
    //Hook de useState - 
    const [categories, setcategories] = useState(['One Punch','Samurai X','Dragon Ball']);

    // const handleAdd = () =>{
    //     setcategories( [...categories, 'HunterXhunter'] );
    // }



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />

            {/* <button onClick={handleAdd}> Agregar</button> */}

            <ol>
                {
                    categories.map( category =>{
                        return <li key={category}>  {category} </li>
                    })
                }
            </ol>
        </>
    )
}


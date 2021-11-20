import React from 'react'
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category}) => {
  
    // const state = useFetchGifs(); // hook
    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__fadeOut animate__delay-2s">{category}</h3>
         
            {loading && <p className="animate_animated animate_flash animate__delay-5s">Loading</p>}
            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem  
                                key={img.id}
                                // img= {img} />
                                {...img} 
                            />
                    ))
                }
                
            
            </div>            
         </> 

    )
}

GifGrid.propTypes  = {
    category: PropTypes.string.isRequired
}

 
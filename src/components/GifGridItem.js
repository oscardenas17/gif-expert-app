import React from 'react'

export const GifGridItem = ( {id,title, url} ) => {
    // console.log( id, title, url);

    return (
        <div className="animate__bounceInLeft animate__delay-5s">
          <img src= {url} alt={title}/>
          <p>{title}</p>
        </div>
    )
}

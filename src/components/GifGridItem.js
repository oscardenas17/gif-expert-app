import React from 'react'

export const GifGridItem = ( {id,title, url} ) => {
    // console.log( id, title, url);

    return (
        <div>
          <img src= {url} alt={title} className="source" />
          <p>{title}</p>
        </div>
    )
}

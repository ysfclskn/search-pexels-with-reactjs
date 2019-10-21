import React from 'react';
import './imageList.css';
import Image from './image'

const imageList =({images})=>{
    const imageList = images.map(image => {
  
         return(
             <Image key={image.id} image={image} />
         )
        
    })

   
    return(
        <div className="imageList-container">
       {imageList}
        </div>
    )

}

export default imageList;
import React, {useContext} from 'react';
import DataContext from '../../store/data-context';
import newyork from '../../assets/img/newyork.jpg'
import moscow from '../../assets/img/moscow.jpg'
import code from '../../assets/img/code.jpg'

const Image = () => {
    const imgCtx = useContext(DataContext)
    const img = imgCtx.image.toLowerCase()
    let imgsrc;
    if(img === 'moscow') {
      imgsrc = moscow
    } else if(img === 'code') {
      imgsrc = code
    } else if(img === 'newyork') {
      imgsrc = newyork
    }
    return (
          <img className='wallpaperImg' src={imgsrc} alt='error'></img>
    )
}

export default Image;
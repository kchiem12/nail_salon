import React from 'react';
import GalleryCard from './components/GalleryCard';
import sample from './imgs/sample_nail_image.jpeg';
import './css/gallery.css';

const Gallery = () => {
    return ( 
        <div className='gallery-cards'>
            <GalleryCard image={sample} title='sample'/>
        </div>
     );
}
 
export default Gallery;
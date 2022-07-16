import React from 'react';
import Stack from '@mui/material/Stack';
import GalleryButton from './GalleryButton.js';
import AboutButton from './AboutButton.js';
import ServicesButton from './ServicesButton.js';
import { Link } from 'react-router-dom';

const NavigationButtons = () => {
    return ( 
        <Stack spacing={5} direction='row'>
            <AboutButton />
            <GalleryButton />
            <ServicesButton />
        </Stack>
     );
}
 
export default NavigationButtons;
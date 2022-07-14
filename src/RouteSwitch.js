import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './About';
import Gallery from './Gallery';

const RouteSwitch = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/about' element={<About />} />
                <Route path="/gallery" element={<Gallery />}></Route>
            </Routes>
        </BrowserRouter>
     );
}
 
export default RouteSwitch;
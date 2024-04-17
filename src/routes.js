import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

function RoutesApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/sobre' element={ <About/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
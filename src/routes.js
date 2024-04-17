import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';

import Header from './components/Header';

function RoutesApp(){
    return (
        <BrowserRouter>
        
            <Header />

            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/sobre' element={ <About/> } />
                <Route path='/contato' element={ <Contact/> } />

                <Route path='*' element={ <Error/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
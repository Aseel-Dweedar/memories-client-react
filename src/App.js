import React from 'react';
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.js';
import Home from './components/home/Home.js';
import Auth from './components/auth/Auth.js';
import PostDetails from './components/postDetails/PostDetails.jsx';

const App = () => {

    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            <Container maxWidth='xl' >
                <Navbar />
                <Routes>
                    <Route path='/' element={<Navigate to='/posts' />} />
                    <Route path='/posts' element={<Home />} />
                    <Route path='/posts/search' element={<Home />} />
                    <Route path='/posts/:id' element={<PostDetails />} />
                    <Route path='/auth' element={!user ? <Auth /> : <Navigate to='/posts' />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;

import React from 'react';
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.js';
import Home from './components/home/Home.js';

function App() {


    return (
        <BrowserRouter>
            <Container maxidth='lg' >
                <Navbar />
                <Switch>
                    <Route exact to='/' component={Home} />
                    {/* <Route exact to='/auth' component={Auth} /> */}
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;

import {Container} from "react-bootstrap";
import {
  BrowserRouter as 
  Switch,
  Route,
} from "react-router-dom";

import React from 'react';
import Firstmonth from './components/Firstmonth';
import Home from './components/homepg'
import Secmonth from "./components/Secmonth";
import Thmonth from "./components/Thmonth";
import Fomonth from "./components/Fomonth";




export default function MainRouter()
{
    return (
        <Switch>
            <Route exact path="/">
            <Container>
                <Home/>
                </Container>
            </Route>
            <Route exact path="/Firstmonth">
            <Container>
                <Firstmonth/>
                </Container>
            </Route>
            <Route exact path="/Secmonth">
            <Container>
                <Secmonth/>
                </Container>
            </Route>
            <Route exact path="/Thmonth">
            <Container>
                <Thmonth/>
                </Container>
            </Route>
            <Route exact path="/Fomonth">
            <Container>
                <Fomonth/>
                </Container>
            </Route>
            

        
            
        </Switch>
    );
}
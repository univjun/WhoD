import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";

import "./index.css";
import FullPage from "./FullPage";
import Sanmin from "./Sanmin";
// import Sanmin from '../components/Sanmin';

import "./index.css";
import { StickyContainer, Sticky } from 'react-sticky';



ReactDOM.render(
    <Router basename="/demos">
        <div>
                <Route exact path="/" component={FullPage}/>
        </div>
    </Router>,
    document.getElementById("root")
);


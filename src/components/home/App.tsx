import {BrowserRouter as Router, Route} from "react-router-dom";
import React from 'react';
import './App.css';
import {Home} from "./Home";
import {SnippetDetail} from "../snippet/SnippetDetail";

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/snippet/:id" component={SnippetDetail}/>
            </div>
        </Router>
    );
};


export default App;

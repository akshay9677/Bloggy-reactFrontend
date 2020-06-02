import React from "react";
import Navbar from "./Navbar"
import Compose from "./Compose";
import Home from "./Home"
import {BrowserRouter as Router,Route} from "react-router-dom"

function App(){
    return (<Router><div>
        <Navbar/>
        
        <br /><br />
        <Route path="/home" component={Home} />
        <Route path="/compose" component={Compose}/>
     </div>
     </Router>
    
    )
}

export default App;
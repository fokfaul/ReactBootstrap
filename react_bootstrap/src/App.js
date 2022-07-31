import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./components/NaviBar";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import {Home} from "./Home"
import {Users} from "./Users"
import {About} from "./About"
import {Footer} from "./components/Footer";

function App() {
    return (
        <Router>
            <NaviBar/>
            <Routes>
                <Route path="/users" element={<Users/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;

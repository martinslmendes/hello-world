import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import NotFound from "./pages/errors/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about-me" element={<AboutMe/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import NotFound from "./pages/errors/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about-me" element={<AboutMe/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;

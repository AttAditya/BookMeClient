import "./variables.css";
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, MoviesPage, TheatresPage } from './pages';
import { Navbar } from "./components";

function App() {
    return (
        <BrowserRouter>
            <div className="app bg-black color-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<MoviesPage />} />
                    <Route path="/theatres" element={<TheatresPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

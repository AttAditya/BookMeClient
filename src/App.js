import "./variables.css";
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';
import { Navbar } from "./components";

function App() {
    return (
        <div className="app bg-black color-white">
            <Navbar />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

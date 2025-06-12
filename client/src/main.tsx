import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/_main.scss';
import Index from "./pages";
import LoginPage from "./pages/login";
import Profile from "./pages/profile";
import AdminPanel from "./pages/adminPanel";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/admin" element={<AdminPanel/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "./pages/Index";
import LoginPage from "./pages/Login";
import Profile from "./pages/Profile";
import AdminPanel from "./pages/AdminPanel";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/GFM-client/" element={<Index/>}/>
                <Route path="/GFM-client/login" element={<LoginPage/>}/>
                <Route path="/GFM-client/profile" element={<Profile/>}/>
                <Route path="/GFM-client/admin" element={<AdminPanel/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)

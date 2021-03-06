import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router(){
    
    const emailLocal = localStorage.getItem('email')

    return(
        <Routes>
            <Route path="/" element={ emailLocal === null ? <Subscribe /> : <Event /> } />
            <Route path="/event" element={<Event />} />
            <Route path="/event/lesson/:slug" element={<Event />} />
        </Routes>
    )
}
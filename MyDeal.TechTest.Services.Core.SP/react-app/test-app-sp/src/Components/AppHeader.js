import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyDeal from '../Components/MyDeal';
import Home from '../Components/Home';
import Main from '../Components/Main';

export default function AppHeader() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>                    
                <Route path="MyDeal" element={<MyDeal />} />   
                    <Route index element={<Home />} />                        
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
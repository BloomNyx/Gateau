import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";

const App = () => {
    return (
    <BrowserRouter basename="Gateau">
        <Routes>
            <Route path="/" element={<HomeView />} />
        </Routes>
    </BrowserRouter>
    );
};

export default App;
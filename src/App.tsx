import './styles/index.scss';
import React, {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {IndexPageAsync} from "./pages/IndexPage/IndexPage.async";
import {useTheme} from "./theme/useTheme";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>toggle theme</button>
        <Link to="/">Главная</Link>
        <Link to="/about">О сайте</Link>
        <Suspense fallback={<div>loading</div>}>
            <Routes>

                <Route path="/about" element={<AboutPageAsync/>}/>
                <Route path="/" element={<IndexPageAsync/>}/>
            </Routes>
        </Suspense>
    </div>
}
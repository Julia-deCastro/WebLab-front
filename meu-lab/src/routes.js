import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./pages/App/App";
import Experiment from "./pages/Experiment/Experiment";
import Header from "./pages/Header/Header";

function RoutesSistem() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/pagina-inicial" element={<App/>}/>
                <Route exact path="/Header" element={<Header/>}/>
                <Route exact path="/experimento" element={<Experiment/>}/>
                <Route exact path="/" element={<App/>}/>
            </Routes>
        </BrowserRouter>
    )

} export default RoutesSistem;
import {Routes as WrapperRoutes, Route, BrowserRouter} from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
export default function Routes(){
    return(
    <BrowserRouter>
    <WrapperRoutes>
        <Route path="/" element={<Home/>} />
        <Route path="/contato" element={<Contato/>} />
    </WrapperRoutes>
    </BrowserRouter>
    )
}
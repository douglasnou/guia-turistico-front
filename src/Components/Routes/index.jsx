import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { ModalCard } from "../ModalCard";

export const RoutesMain = ()=>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/cart" element={<ModalCard/>} />
        </Routes>
    )
}
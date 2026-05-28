import { Routes, Route } from "react-router";
import Home from "../pages/home/Home";
import Character from "../pages/character/Characters";
import Episodes from "../pages/episodes/Episodes";
import Locations from "../pages/locations/Locations";
import DetailCharacter from "../pages/character/DetailCharacter";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/character" element={<Character />}/>
            <Route path="/character/:id" element={<DetailCharacter />}/>
            <Route path="/episodes" element={<Episodes />}/>
            <Route path="/locations" element={<Locations />}/>
        </Routes>
    )
}
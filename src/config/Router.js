import { Routes, Route, Link } from "react-router-dom";
import { Home,Electronic,BabyToy,BeautyFragrance,Sport,Men,Women } from "../container";
import {Navbar,Gif,ScrolbarSec,MainSlider, HeaderCard, MainCard, RecommendedCard } from "../component";
const AppRouter=()=>{
    return(
        <div>
            <div>
            <Navbar/>

            </div>
            <div>
            <ScrolbarSec/>

            </div>
            <div>

            <Gif/>
            </div>
            <div>
                <MainSlider/>
            </div>
            <div>
                <HeaderCard/>
                <br/>
            </div>
            
                <MainCard/>
           
            
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/electronic"  element={<Electronic/>} />
                <Route path="/babytoy"  element={<BabyToy/>} />
                <Route path="/beauty"  element={<BeautyFragrance/>} />
                <Route path="/women"  element={<Women/>} />
                <Route path="/men"  element={<Men/>} />
                <Route path="/sport"  element={<Sport/>} />
                
            </Routes>
        </div>
    )
}
export default AppRouter
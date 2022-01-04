// import { Routes, Route, Link } from "react-router-dom";
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
           
            
        </div>
    )
}
export default AppRouter
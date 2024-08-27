import {React} from "react";
import './App.css';
import { News } from "./News";
import {Headlines} from './Headlines';


function Health(){

    return(
        <>
        <div className="overflow-hidden d-flex flex-column justify-content-center m-3">
                <h3 className="d-flex justify-content-center" style={{color:'red'}}>Top Headlines</h3>
                <Headlines />
        </div>
        
        <div className="type">
            <h3 className="text bg-transparent" style={{fontWeight:'bold'}}>HEALTH <span> NEWS </span></h3>
            <div className="hide"></div>
        </div>

        <div className="overflow-x-hidden d-inline-flex">

        <News category={"health"}/>

        </div>
        </>
    )
}

export default Health;
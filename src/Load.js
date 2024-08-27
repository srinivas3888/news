import React from "react";
import './App.css';


function Load(){

    return(
        <div id="loader">
        <div className="spinner-grow" style={{width: "6.2rem", height: "6.2rem", border: "1.2rem double red"}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>
    );
}

export default Load;
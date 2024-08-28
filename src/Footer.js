import {React} from "react";


function Footer(){

    return(
        <div style={{height:'15rem', bottom:'0px', marginTop:'3rem', marginBottom:'0px'}}>
            <h3 className="fs-6 d-flex justify-content-center" style={{color:'white'}} ><span className="fs-5 m-1 p-1" style={{color:'greenyellow'}}> Headlines Hub </span> © 2024 Company, Inc</h3>
            <h5 className="fs-6 d-flex justify-content-center" style={{color:'white'}}>Created by - Srinivas Batthula</h5>
            <p className="fs-6 d-flex justify-content-center flex-row" style={{color:'white'}}>Contact me at :- 
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/srinivas-batthula?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <i className="bi bi-linkedin fs-4 m-2 p-2" style={{color:'skyblue'}}></i> </a>
                <a rel="noreferrer" target="_blank" href="https://www.instagram.com/"> <i className="bi bi-instagram fs-4 m-2 p-2" style={{color:'red'}}></i> </a>
            </p>
            <div className="d-flex justify-content-center">
            <h3 >News you can TRUST & Stories you will REMEMBER</h3>
            <h4 >Stay tuned to Headlines Hub,, Stay updated</h4>
            </div>
        </div>
    )
}

export {Footer};
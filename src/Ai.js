import {React, useState} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';


import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
    } from "@google/generative-ai";

    const apiKey = process.env.REACT_APP_API_KEY2;       
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 4,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};


function Result({quest, ans}){
    return (
        (quest==="")?(<div className="fs-5"> Hello,, <p className="fs-6">How can i help you today...</p> </div>):( <div className="m-2 p-1" style={{backgroundColor:"rgb(52, 52, 52)", borderRadius:'1rem', }}>
            <p className="fs-5 w-100" style={{borderRadius:'0.5rem'}} id="q"> <i className="bi bi-person-circle fs-4 m-1" style={{color:'white'}}></i> {quest}</p>

            <div className="d-flex flex-row justify-content-center">
            <i className="bi bi-robot fs-4 m-1" style={{color:'white'}}></i>
            <p id="a" style={{borderRadius:'0.5rem'}} dangerouslySetInnerHTML={{__html:ans}} className="mt-1 p-1 fs-6"></p>
            </div>
        </div> )
    );
}


function Ai(){
    const [val, setVal] = useState("");
    const [data, setData] = useState([{"quest":"", "ans":""}]);
    const [sub, setSub] = useState(false);
    let res="";

    function handleChange(e){
        setVal(e.target.value);
    }

    function handleClick(e){
        console.log("Loading...");
        setVal("");
        setSub(true);
        async function fdata(){

            async function run(){
                let r;
                try{
                    const chatSession = model.startChat({
                        generationConfig,
                        history: [
                        ],
                        });
                    
                    let result = await chatSession.sendMessage(val);
                    result = result.response;
                    console.log(result.text());
                    r = result.text();
                    
                }
                catch(error){
                    r="An error occured, Please try agin later...";
                    console.error("Error occured."+error);
                }
                return r;
            }
            res = await run();

            res = res.split('**');
            let newf="";
            for(let i=0; i<res.length; i+=1){
                if(i%2===0){
                    newf+=res[i];
                }
                else{
                    newf+=res[i].toUpperCase();
                }
            }

            newf = newf.split('*');
            res="";
            for(let i=0; i<newf.length; i+=1){
                if(i%2===0){
                    res+=newf[i];
                }
                else{
                    res+=newf[i]+"\n";
                }
            }
            
            setData([ {"quest":val, "ans":res}, ...data ]);
            setSub(false);
        }
        fdata();
    }

    return(
        <div className="w-100 m-2 p-2" >
            <div className="d-flex justify-content-center" style={{scrollbarWidth:"thin", overflowX:'hidden', overflowY:'scroll', scrollBehavior:'smooth'}}>
            <div style={{height:'70vh'}} className="w-75">
                <p style={{textAlign:'center'}} className="fs-4 m-1" id="ai-text">Smart AI-Assistant</p>
                <div className="m-2 p-1 ">
                <div id="content" style={{color:'white', textAlign:'center', lineHeight:'2rem'}} className="d-flex flex-column justify-content-center">
                    {
                        (sub===true)?(<p> <i className="fa-solid fa-spinner fs-3" id="ai-load"></i> Loading...</p>):(
                            data.map((msg, index)=>{ 
                            return (
                        <Result quest={msg.quest} ans={msg.ans} key={index} />
                            );
                        })
                        )
                    }
                </div>
                </div>
            </div>
            </div>

            <div className="d-flex justify-content-center position-sticky flex-column" style={{top:'100vh'}}>
                <div className="d-flex justify-content-center">
            <div className="input-group m-2 w-50 d-flex justify-content-center" >
                <input value={val} onChange={handleChange} id="inp" type="text" style={{ height:'3rem' }} className="form-control fs-6" placeholder="Enter a prompt here..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-success " type="button" id="button-addon2" onClick={handleClick}>Send</button>
            </div>
            </div>
            <div>
            <p style={{color:'gray'}} className="d-flex justify-content-center">NOTE: I don't have access to real time info like Live News Updates!</p>
            </div>
            </div>
        </div>
    );
}

export default Ai;
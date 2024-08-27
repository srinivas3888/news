import {React, useEffect, useState} from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Subscribe(){
    const [error, setError] = useState({ "name":"", "email":"", "check":"" });
    const [val, setVal] = useState({ "name":"", "email":"", "check":false });
    const [sub, setSub] = useState(false);
    const navigate = useNavigate();

    function Validite(){
        let t={...error};
        if(val.name===""){
            t["name"]="UserName is required!";
        }
        else{
            t["name"]="";
        }

        if(val.email===""){
            t["email"]="E-mail is required!";
        }
        else if(!/\S+@\S+\.\S+/.test(val.email)){
            t["email"]="E-mail is Invalid!";
        }
        else{
            t["email"]="";
        }

        if(val.check===false){
            t["check"]="You must agree before submitting!";
        }
        else{
            t["check"]="";
        }
        setError(t);

        if(t.name==="" && t.email==="" && t.check==="" && val.check===true){
            return true;
        }
        else{
            return false;
        }
    }

    function handleChange(event){
            console.log("change");
            if(event.target.name==="check"){
                setVal({...val, [event.target.name]:event.target.checked});
            }
            else{
                setVal({...val, [event.target.name]:event.target.value});
            }
            Validite();
        }

    function handleSubmit(event){
        event.preventDefault();
        let icon=document.getElementById('icon');

        if (Validite()===true){
            console.log("submited");
            icon.className='fa-solid fa-spinner text-success';

            setSub(true);
            setTimeout(()=>{ navigate("/subscribe/verify") }, 1500);
        }
        else{
            console.log("Not-submited");
            icon.className='fa-solid fa-user';

            setSub(false);
            return;
        }
    }

    useEffect(()=>{
        async function submit(){
            let form = document.getElementById('form');
            const formData = new FormData(form);

            try {
                const response = await fetch("https://otp-api-test-backend.onrender.com/send-sms/", {
                    method: "POST",
                    body: formData
                });
    
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
    
                const result = await response.json(); 
                console.log('Success:', result);
                // Optional: Handle success (e.g., show a success message)
    
            } catch (error) {
                console.error('Error:', error);
                // Optional: Handle error (e.g., show an error message)
            }
        }
        if(sub===true){
            console.log("effect ran");
            submit();
            setSub(false);
    }
    }, [sub]);


    return (
    <div className="d-flex justify-content-center mt-1 mb-5">
        <div className="fs-1 d-flex justify-content-center position-absolute mt-1"> <i id="icon" className='fa-solid fa-user'></i> </div>
        <div className="bg-body-secondary p-5">

    <Form onSubmit={handleSubmit} id="form">
        <Row>
        <Form.Group as={Col} controlId="formGridName">
            <Form.Label className="w-100 fs-5">Name</Form.Label>
            <FloatingLabel
        controlId="floatingInput"
        label="Full name..."
        >
        <Form.Control className="w-100 fs-6" type="text" name="name" onChange={handleChange} value={val.name} placeholder="Name" autoFocus/>
        </FloatingLabel>
        </Form.Group>
        <p className="mb-3 fst-italic error" style={{fontSize:"small"}}>{error.name}</p>
        </Row>

        <Row>
        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className="w-100 fs-5">Email</Form.Label>
            <FloatingLabel
        controlId="floatingInput"
        label="Email address..."
        >
        <Form.Control className="w-100 fs-6" type="email" name="email" onChange={handleChange} value={val.email} placeholder="name@example.com" autoComplete="email"/>
        </FloatingLabel>
        </Form.Group>
        <p className="mb-3 fst-italic error" style={{fontSize:"small"}}>{error.email}</p>
        </Row>

        <Row>
        <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" checked={val.check} name="check" label={<span className="text-decoration-underline w-auto text-primary fs-6">Agree to the terms and conditions</span>} onChange={handleChange} />
        </Form.Group>
        <p className="mb-4 fst-italic error" style={{fontSize:"small"}}>{error.check}</p>
        </Row>

        <input defaultValue="0" type="text" name="check" id="check" style={{display: "none"}} required />

        <Button variant="primary" type="submit">
            Send-OTP
        </Button>
    </Form>

    </div>
    </div>
    );
}

export default Subscribe;


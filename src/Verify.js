import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Verify(){
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState("")
    const [success, setSuccess] = useState([null, ""]);

    function handleSubmit(event){
        let v=false, t="";
        if(document.getElementById('otp').value===""){
            t="Please Enter a Valid OTP!";
            setSuccess([null, ""]);
        }
        else{
            setError("");
            setSuccess([<i className="fa-solid fa-arrows-rotate"></i>, "Please Wait..."]);
            fdata(event);
        }
        setValidated(v);
        setError(t);
    }

    async function fdata(event){
        let t="", v=false;
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            const response = await fetch("https://otp-api-test-backend.onrender.com/verify-otp/", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json(); // or response.text() if not JSON
            if(result.status==="Success"){
                t="Redirecting to HOME page...";
                v=true;
            }
            else{
                t="Please Enter a Valid OTP!";
                setSuccess([null, ""]);
            }
            console.log('Success:', result);
            // Optional: Handle success (e.g., show a success message)

        } catch (error) {
            t="An Error Occured! Please Retry again.";
            setSuccess([null, ""]);
            console.error('Error:', error);
            // Optional: Handle error (e.g., show an error message)
        }
        setError(t);
        setValidated(v);
    }

    if(validated===true){
        setTimeout(()=>{ navigate("/") }, 2000);
    }

    
    return(
        <div className="d-flex justify-content-center mt-1 mb-5" >
            <div className="bg-body-secondary p-5">
            <Form onSubmit={handleSubmit} id="form">
                <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label className="w-100 fs-5">Enter OTP:</Form.Label>
                <FloatingLabel
                label="OTP..."
                >
                <Form.Control className="w-auto fs-6" type="text" name="otp" id="otp" placeholder="OTP..." autoFocus/>
                </FloatingLabel>
                </Form.Group>
                </Row>

                <Button variant="primary" type="submit" id="verify">
                    Verify
                </Button>
            </Form>

            <div className="mt-1 mb-2">
                <p style={{color:'rgb(107, 8, 8)'}}> Check your Email's Inbox & Spams! </p>
            </div>

            <div id="error">
            { 
                <p>{error}</p>
            }
            </div>
            {success && <div id="success">
            <>
                {(validated===true)?<div className="fs-1"><i className="fa-solid fa-circle-check"></i></div> :<div className="fs-1">{success[0]}</div>}
                {(validated===true)?<p>E-mail verified Successfully</p> :<p>{success[1]}</p>}
                </>
            </div>}
            </div>
        </div>
    );
}

export default Verify;


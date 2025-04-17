import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {

    const [obj, setobj] = useState({});
    const [array, setarray] = useState([]);
    const [blankobj, setblankobj] = useState({});
    const [errorMessage, setErrorMessage] = useState({});
    const fileInputRef = useRef(null);

    const navigate = useNavigate();

    const registerdata = (e) => {
        if (e.target.type === 'file') {
            obj[e.target.name] = e.target.files[0];
            blankobj[e.target.name] = null;
        } else {
            obj[e.target.name] = e.target.value;
            blankobj[e.target.name] = "";
        }

        if (e.target.name === "name") {
            if (e.target.value === "" || e.target.value === undefined) {
                errorMessage[e.target.name] = "Name is required!";
            } else if (!/^[a-zA-Z ]{1,40}$/.test(e.target.value)) {
                errorMessage[e.target.name] = "Name must be alphabet only.";
            } else {
                errorMessage[e.target.name] = "";
            }
        }

        if (e.target.name === "email") {
            if (e.target.value === "" || e.target.value === undefined) {
                errorMessage[e.target.name] = "E-mail is required!";
            } else if (!e.target.value.includes("@gmail") && !e.target.value.includes("@outlook")) {
                errorMessage[e.target.name] = "E-mail not valid.";
            } else {
                errorMessage[e.target.name] = "";
            }
        }

        if (e.target.name === "phonenumber") {
            if (e.target.value === "" || e.target.value === undefined) {
                errorMessage[e.target.name] = "Phone Number is required!";
            } else if (e.target.value.length < 10) {
                errorMessage[e.target.name] = "Phone Number must be 10 degits.";
            } else if (e.target.value.length > 10) {
                errorMessage[e.target.name] = "Phone Number is not valid.";
            } else {
                errorMessage[e.target.name] = "";
            }
        }

        if (e.target.name === "password") {
            if (e.target.value === "" || e.target.value === undefined) {
                errorMessage[e.target.name] = "Password is required!";
            } else if (e.target.value.length < 6) {
                errorMessage[e.target.name] = "Password must be six characters.";
            } else {
                errorMessage[e.target.name] = "";
            }
        }

        if (e.target.name === "profileimage") {
            if (e.target.value === "" || e.target.value === undefined) {
                errorMessage[e.target.name] = "Profile is required!";
            } else {
                errorMessage[e.target.name] = "";
            }
        }

        setobj({ ...obj });
        setblankobj({ ...blankobj });
        setErrorMessage({ ...errorMessage });
    };

    const registerSavedata = () => {
        let isValid = true;

        if (obj.name === "" || obj.name === undefined) {
            errorMessage.name = "Name is required!";
            isValid = false;
        }

        if (obj.email === "" || obj.email === undefined) {
            errorMessage.email = "E-mail is required!";
            isValid = false;
        }

        if (obj.phonenumber === "" || obj.phonenumber === undefined) {
            errorMessage.phonenumber = "Phone Number is required!";
            isValid = false;
        }

        if (obj.password === "" || obj.password === undefined) {
            errorMessage.password = "Password is required!";
            isValid = false;
        }

        if (!obj.profileimage || !(obj.profileimage instanceof File)) {
            errorMessage.profileimage = "Profile is required!";
            isValid = false;
        }

        setErrorMessage({ ...errorMessage });

        if (!isValid) return;

        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }

        array.push(obj);
        setarray([...array]);
        console.log(array);

        setobj({ ...blankobj });
        setErrorMessage({});

        navigate("/");
    }

    return (
        <>
            <div className='container min-vh-100 d-flex align-items-center justify-content-center p-4'>
                <div className='shadow rounded-5 w-100 p-4 mx-auto' style={{ maxWidth: '600px', border: "8px double black" }}>
                    <h2 className='fw-bold text-center'>Sign Up</h2>
                    <form className='w-100'>
                        <div className='row'>
                            <div className='col-12 col-md-6 mb-3 mt-2'>
                                <label htmlFor="" className='fw-bold'>Name</label>
                                <input type="text" name="name" className='d-block mt-1 w-100 border border-dark rounded py-1 px-2' onChange={registerdata} value={obj?.name || ''} style={{ outline: "none" }} />
                                <div className='text-danger fw-medium'>{errorMessage.name}</div>
                            </div>
                            <div className='col-12 col-md-6 mb-3 mt-2'>
                                <label htmlFor="" className='fw-bold'>E-mail</label>
                                <input type="text" name="email" className='d-block mt-1 w-100 border border-dark rounded py-1 px-2' onChange={registerdata} value={obj?.email || ''} style={{ outline: "none" }} />
                                <div className='text-danger fw-medium'>{errorMessage.email}</div>
                            </div>
                            <div className='col-12 col-md-6 mb-3'>
                                <label htmlFor="" className='fw-bold'>Phone Number</label>
                                <input type="number" name="phonenumber" className='d-block mt-1 w-100 border border-dark rounded py-1 px-2' onChange={registerdata} value={obj?.phonenumber || ''} style={{ outline: "none" }} />
                                <div className='text-danger fw-medium'>{errorMessage.phonenumber}</div>
                            </div>
                            <div className='col-12 col-md-6 mb-3'>
                                <label htmlFor="" className='fw-bold'>Password</label>
                                <input type="text" name="password" className='d-block mt-1 w-100 border border-dark rounded py-1 px-2' onChange={registerdata} value={obj?.password || ''} style={{ outline: "none" }} />
                                <div className='text-danger fw-medium'>{errorMessage.password}</div>
                            </div>
                            <div className='col-12 mb-3'>
                                <label htmlFor="" className='fw-bold'>Profile Image</label>
                                <input type="file" name="profileimage" ref={fileInputRef} className='d-block mt-1 w-100 border border-dark rounded py-1 px-2' onChange={registerdata} style={{ outline: "none" }} />
                                <div className='text-danger fw-medium'>{errorMessage.profileimage}</div>
                            </div>
                        </div>
                        <div className='text-center mt-2'>
                            <button type='button' className='btn btn-primary fw-bold' onClick={registerSavedata}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
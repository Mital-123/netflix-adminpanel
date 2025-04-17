import React, { useState } from 'react'
import { FaMailBulk } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [obj, setobj] = useState({});
    const [array, setarray] = useState([]);
    const [blankobj, setblankobj] = useState({});
    const [errormsg, setErrormsg] = useState({});

    const navigate = useNavigate();

    const logindata = (e) => {
        obj[e.target.name] = e.target.value;
        blankobj[e.target.name] = "";

        if (e.target.name === "email") {
            if (e.target.value === "" || e.target.value === undefined) {
                errormsg[e.target.name] = "E-mail is required!";
            } else {
                errormsg[e.target.name] = "";
            }
        }

        if (e.target.name === "Password") {
            if (e.target.value === "" || e.target.value === undefined) {
                errormsg[e.target.name] = "Password is required!";
            } else {
                errormsg[e.target.name] = "";
            }
        }

        setobj({ ...obj });
        setblankobj({ ...blankobj });
        setErrormsg({ ...errormsg });
    }

    const loginsavedata = () => {
        let isValid = true;

        if (obj.email === "" || obj.email === undefined) {
            errormsg.email = "E-mail is required!";
            isValid = false;
        }

        if (obj.Password === "" || obj.Password === undefined) {
            errormsg.Password = "Password is required!";
            isValid = false;
        }

        setErrormsg({ ...errormsg });

        if (!isValid) return;

        array.push(obj);
        setarray([...array]);
        console.log(array);

        setobj({ ...blankobj });
        setErrormsg({});

        navigate("/dashboard");
    }

    return (
        <>
            <div className='container min-vh-100 d-flex align-items-center justify-content-center p-4'>
                <div className='border border-dark border-5 shadow rounded-5 w-100 p-4 mx-auto' style={{ maxWidth: '400px' }}>
                    <h2 className='fw-bold text-center'>Login</h2>
                    <form className='w-100'>
                        <div className='row'>
                            <div className='col-12 mb-3'>
                                <label htmlFor="" className='fw-bold'><FaMailBulk /> E-mail</label>
                                <input type="email" name="email" className='d-block mt-1 w-100 border border-dark rounded py-1 px-2' onChange={logindata} value={obj?.email || ''} style={{ outline: "none" }} />
                                <div className='text-danger fw-medium'>{errormsg.email}</div>
                            </div>
                            <div className='col-12 mb-3'>
                                <label htmlFor="" className='fw-bold'><RiLockPasswordFill /> Passowrd</label>
                                <input type="Password" name="Password" className='d-block mt-1 w-100 border border-dark rounded py-1 px-2' onChange={logindata} value={obj?.Password || ''} style={{ outline: "none" }} />
                                <div className='text-danger fw-medium'>{errormsg.Password}</div>
                            </div>
                        </div>
                        <div className='text-center mt-2'>
                            <button type='button' className='btn btn-success fw-bold' onClick={loginsavedata}>Login</button>
                        </div>
                    </form>
                    <div className='text-center mt-2 fw-medium'>Don't have an account? <Link to={"/register"} className='text-dark fw-bold text-decoration-none'><span>Register now</span></Link></div>
                </div>
            </div>
        </>
    )
}

export default Login
import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
    const [data, setData] = useState({
        email: "",
        pass: ""
    })
    const navi = useNavigate();
    const handleInput = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((!data.email.includes("@"))) {
            alert("Enter valid email address!!")
        }
        else if (!data.pass.trim()) {
            alert("Enter Password!")
        }
        else {
            console.log(data);
            axios.post("https://ecommerce-ns6o.onrender.com/apis/login", data) //http://localhost:4500/apis/login
                .then((res) => {
                    alert(res.data.msg);
                    if (res.data.msg === "User Logged in Successfully!") {
                        localStorage.setItem("token", res.data.token);
                        navi("/");
                    }
                })
                .catch(err => console.log(err));
            setData({ uname: "", email: "", pass: "", contact: "" })
        }
    }
    return (
        <div className='registerpage'>
            <div className='registerdiv'>
                <h2 style={{ textDecoration: "underLine" }}>Login here!</h2>
                <form>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email' placeholder='Enter your Email' value={data.email} onChange={handleInput} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pass'>Password</label>
                        <input type='password' name='pass' id='pass' placeholder='Enter your password' value={data.pass} onChange={handleInput} />
                    </div>
                    <button className='reg_submit' onClick={handleSubmit}>Submit</button>
                    <NavLink to="/register" className="navdeco"><h4>Not yet Registered? Please Register here!</h4></NavLink>
                </form>
            </div>
        </div>
    )
}

export default Login
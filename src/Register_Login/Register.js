import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Register() {
    const [data, setData] = useState({
        uname: "",
        email: "",
        pass: "",
        contact: ""
    })
    const navi = useNavigate();
    const handleInput = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.uname.trim()) {
            alert("Enter Name!\nIt is mandatory!!")
        }
        else if ((!data.email.includes("@"))) {
            alert("Enter valid email address!!")
        }
        else if (!data.pass.trim()) {
            alert("Enter Password!")
        }
        else if (!data.contact.trim()) {
            alert("Enter Mobile Number");
        }
        else {
            console.log(data);
            axios.post("https://ecommerce-ns6o.onrender.com/apis/register", data) //http://localhost:4500/apis/register
                .then((res) => {
                    console.log(res.data);
                    alert(res.data.msg);
                    if (res.data.msg === "User Registered Successfully!") {
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
                <h2 style={{ textDecoration: "underLine" }}>Register here!</h2>
                <form>
                    <div className='form-group'>
                        <label htmlFor='uname'>Name</label>
                        <input type='text' name='uname' id='uname' placeholder='Enter your name' value={data.uname} onChange={handleInput} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' id='email' placeholder='Enter your Email' value={data.email} onChange={handleInput} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pass'>Password</label>
                        <input type='password' name='pass' id='pass' placeholder='Enter your password' value={data.pass} onChange={handleInput} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='contact'>Contact</label>
                        <input type='text' name='contact' id='contact' placeholder='Enter your number' value={data.contact} onChange={handleInput} />
                    </div>
                    <button className='reg_submit' onClick={handleSubmit}>Submit</button>
                    <NavLink to="/login" className="navdeco"><h4>Already have an account? Please Login!</h4></NavLink>
                </form>
            </div>
        </div>
    )
}

export default Register
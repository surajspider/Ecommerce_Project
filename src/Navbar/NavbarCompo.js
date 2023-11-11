import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function NavbarCompo() {
    const [showsubroute, setsubroute] = useState({ all: false, mobiles: false, electronics: false, iphone: false, watch: false, user: false });
    const [loginout, setloginout] = useState(true);
    const navi = useNavigate();
    const token = localStorage.getItem("token");
    const logoutfun = () => {
        console.log("buttonpressed");
        localStorage.removeItem("token");
        setloginout(true);
        navi("/");
    }
    useEffect(() => {
        if (token) {
            axios.get("https://ecommerce-ns6o.onrender.com/apis/auth", { headers: { "authorization": `Bearer ${token}` } }) //http://localhost:4500/apis/auth
                .then((res) => {
                    console.log(res.data.msg);
                    if (res.data.msg === "User Authorized") {
                        setloginout(false);
                    }
                })
                .catch(err => console.log(err))
        }
    }, [token])
    return (
        <div>
            <div className='navbar'>
                <div><h2 className='sitename'>"Treat yo' self"</h2></div>
                <div className='navroute'>
                    <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} to="/" ><h3>Home</h3></NavLink>
                    <div onMouseEnter={() => setsubroute({ ...showsubroute, all: true })} onMouseLeave={() => setsubroute({ ...showsubroute, all: false })}>
                        <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} to="/all"><h3>All</h3></NavLink>
                        {showsubroute.all && (
                            <div className='subroute all'>
                                <div className='subroute1'>
                                    <h5>Store</h5>
                                    <NavLink to="/test"><h4>link1</h4></NavLink>
                                    <NavLink to="/test2"><h4>link2</h4></NavLink>
                                </div>
                                <div className='subroute2'>
                                    <h5>Accessories</h5>
                                    <NavLink to="/test"><h4>link1</h4></NavLink>
                                    <NavLink to="/test2"><h4>link2</h4></NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                    <div onMouseEnter={() => setsubroute({ ...showsubroute, mobiles: true })} onMouseLeave={() => setsubroute({ ...showsubroute, mobiles: false })}>
                        <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} to="/mobiles"><h3>Mobiles</h3></NavLink>
                        {showsubroute.mobiles && (
                            <div className='subroute mobile'>
                                <div className='subroute1'>
                                    <h5>Store</h5>
                                    <NavLink to="/test"><h4>link1</h4></NavLink>
                                    <NavLink to="/test2"><h4>link2</h4></NavLink>
                                </div>
                                <div className='subroute2'>
                                    <h5>Accessories</h5>
                                    <NavLink to="/test"><h4>link1</h4></NavLink>
                                    <NavLink to="/test2"><h4>link2</h4></NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                    <div onMouseEnter={() => setsubroute({ ...showsubroute, electronics: true })} onMouseLeave={() => setsubroute({ ...showsubroute, electronics: false })}>
                        <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} to="/electronics"><h3>Electronics</h3></NavLink>
                        {showsubroute.electronics && (
                            <div className='subroute electronics'>
                                <div className='subroute1'>
                                    <h5>Store</h5>
                                    <NavLink to="/test"><h4>link1</h4></NavLink>
                                    <NavLink to="/test2"><h4>link2</h4></NavLink>
                                </div>
                                <div className='subroute2'>
                                    <h5>Accessories</h5>
                                    <NavLink to="/test"><h4>link1</h4></NavLink>
                                    <NavLink to="/test2"><h4>link2</h4></NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                    <div onMouseEnter={() => setsubroute({ ...showsubroute, iphone: true })} onMouseLeave={() => setsubroute({ ...showsubroute, iphone: false })}>
                        <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} to="/iphone"><h3>Iphones</h3></NavLink>
                        {showsubroute.iphone && (
                            <div className='subroute iphone'>
                                <div className='subroute1'>
                                    <h5>Store</h5>
                                    <NavLink to="/test"><h4>link1</h4></NavLink>
                                    <NavLink to="/test2"><h4>link2</h4></NavLink>
                                </div>
                                <div className='subroute2'>
                                    <h5>Accessories</h5>
                                    <NavLink to="/test"><h4>link1</h4></NavLink>
                                    <NavLink to="/test2"><h4>link2</h4></NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                    <div onMouseEnter={() => setsubroute({ ...showsubroute, watch: true })} onMouseLeave={() => setsubroute({ ...showsubroute, watch: false })}>
                        <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} to="/watches"><h3>Watches</h3></NavLink>
                        {showsubroute.watch && (
                            <div className='subroute watch'>
                                <div className='subroute1'>
                                    <h5>Store</h5>
                                    <NavLink to="/test"><h4>link1</h4></NavLink>
                                    <NavLink to="/test2"><h4>link2</h4></NavLink>
                                </div>
                                <div className='subroute2'>
                                    <h5>Accessories</h5>
                                    <NavLink to="/test"><h4>link1</h4></NavLink>
                                    <NavLink to="/test2"><h4>link2</h4></NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='searchboxdiv'>
                    <input type='text' className='searchbox' placeholder='Search here...'></input>
                    <button type="button">search</button>
                </div>
                <div className='icons'>
                    <FontAwesomeIcon icon={faCartShopping} size='2xl' className='cartcolor' />
                    <div onMouseEnter={() => setsubroute({ ...showsubroute, user: true })} onMouseLeave={() => setsubroute({ ...showsubroute, user: false })}>
                        <FontAwesomeIcon icon={faUser} size="2xl" className='usercolor' />
                        {showsubroute.user && (
                            <div>
                                {loginout && (
                                    <div className='subroute_user'>
                                        <NavLink className="login_navlink" to="/login"><h4>Login</h4></NavLink>
                                        <NavLink className="login_navlink" to="/register"><h4>Register</h4></NavLink>
                                    </div>
                                )}
                                {!loginout && (
                                    <div className='subroute_user' id='logoutdiv'>
                                        <h4>{ }</h4>
                                        <NavLink className="login_navlink"><h4 onClick={() => logoutfun()}>Logout</h4></NavLink>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavbarCompo
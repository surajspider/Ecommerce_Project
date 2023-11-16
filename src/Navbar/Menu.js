import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function Menu() {
    const [toggle, setToggle] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [loginout, setloginout] = useState(true);
    const navi = useNavigate();
    const handleInput = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
    }
    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://ecommerce-ns6o.onrender.com/api/search?searchText=${searchText}`); //https://ecommerce-ns6o.onrender.com/api/search?searchText=${searchText} http://localhost:4500/api/search?searchText=${searchText}
            const searchResult = response.data;
            console.log(response.data);
            console.log(searchResult.length);
            if (searchResult.length === 0) {
                alert("Results not found!");
                setSearchText("");
                navi("/");
            }
            else {
                navi("/search", { state: { searchResult, searchText } });
                setSearchText("");
            }
            shutmenu();
        }
        catch (err) {
            console.log("Error searching:", err);
        }
    }
    const toggleMenu = () => {
        setToggle(!toggle);
    }
    const shutmenu = () => {
        setToggle(false);
    }
    const menuStyle = {
        display: toggle ? "block" : "none"
    };
    const token = localStorage.getItem("token");
    const logoutfun = () => {
        console.log("buttonpressed");
        localStorage.removeItem("token");
        setloginout(true);
        navi("/");
        shutmenu();
    }
    useEffect(() => {
        if (token) {
            axios.get("https://ecommerce-ns6o.onrender.com/apis/auth", { headers: { "authorization": `Bearer ${token}` } }) //https://ecommerce-ns6o.onrender.com/apis/auth http://localhost:4500/apis/auth
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
            <div className='navbarmedia'>
                <div><h2 className='sitename'>"Treat yo' self"</h2></div>
                <button className='menubutton buttons' onClick={toggleMenu}>
                    <img src="https://cdn-icons-png.flaticon.com/512/4663/4663114.png" alt='not found' style={{ width: "100%", height: "100%" }} />
                </button>
            </div>

            <div className='navroutemedia' style={menuStyle}>
                <div className='searchboxdiv searchboxmedia'>
                    <input type='text' className='searchbox' placeholder='Search here...' value={searchText} onChange={handleInput} />
                    <button onClick={handleSearch}>search</button>
                </div><hr />
                {loginout && (
                    <div>
                        <NavLink className="navlink" to="/login" onClick={shutmenu}><h3 style={{ display: "inline" }}>Login</h3><FontAwesomeIcon icon={faUser} size="2xl" className='usercolor' /></NavLink>
                    </div>
                )}
                {!loginout && (
                    <div>
                        <NavLink className="navlink" to="/" onClick={() => logoutfun()}><h3 style={{ display: "inline" }}>Logout</h3><FontAwesomeIcon icon={faUser} size="2xl" className='usercolor' /></NavLink>
                    </div>
                )}<hr />
                <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} to="/" onClick={shutmenu}><h3>Home</h3></NavLink><hr />
                <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} onClick={shutmenu} to="/all"><h3>All</h3></NavLink><hr />
                <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} onClick={shutmenu} to="/mobiles"><h3>Mobiles</h3></NavLink><hr />
                <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} onClick={shutmenu} to="/electronics"><h3>Electronics</h3></NavLink><hr />
                <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} onClick={shutmenu} to="/iphone"><h3>Iphones</h3></NavLink><hr />
                <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} onClick={shutmenu} to="/watches"><h3>Watches</h3></NavLink><hr />
                <NavLink className="navlink" to="/cart"><h3 style={{ display: "inline" }}>Cart</h3><FontAwesomeIcon icon={faCartShopping} size='2xl' className='cartcolor' onClick={shutmenu} /></NavLink>
            </div>
            {/* <div className='searchboxdiv'>
                    <input type='text' className='searchbox' placeholder='Search here...' value={searchText} onChange={handleInput} />
                    <button onClick={handleSearch}>search</button>
                </div>
                <div className='icons'>
                    <NavLink to="/cart"><FontAwesomeIcon icon={faCartShopping} size='2xl' className='cartcolor' /></NavLink>
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

                </div> */}
        </div>
    )
}

export default Menu
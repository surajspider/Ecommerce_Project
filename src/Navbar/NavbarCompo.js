import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Menu from './Menu'


function NavbarCompo() {
    const [showsubroute, setsubroute] = useState({ all: false, mobiles: false, electronics: false, iphone: false, watch: false, user: false });
    const [loginout, setloginout] = useState(true);
    const [searchText, setSearchText] = useState("");
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
        }
        catch (err) {
            console.log("Error searching:", err);
        }
    }
    const token = localStorage.getItem("token");
    const logoutfun = () => {
        console.log("buttonpressed");
        localStorage.removeItem("token");
        setloginout(true);
        navi("/");
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
    const sam = ["samsung", "redmi", "oneplus", "realme", "iqoo", "case", "charger"];
    const elec = ["dell", "hp", "acer", "headphone", "earbuds"];
    const iph = ["Iphone13", "Iphone14", "Iphone15", "icase", "icharger"];
    const wat = ["titan", "fastrack", "smartwatch"];
    return (
        <div className='sticky'>
            <div className='menu'>
                <Menu />
            </div>
            <div className='navbar'>
                <div><h2 className='sitename'>"Treat yo' self"</h2></div>
                <div className='navroute'>
                    <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} to="/" ><h3>Home</h3></NavLink>
                    <div onMouseEnter={() => setsubroute({ ...showsubroute, all: true })} onMouseLeave={() => setsubroute({ ...showsubroute, all: false })}>
                        <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} to="/all"><h3>All</h3></NavLink>
                        {/* {showsubroute.all && (
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
                        )} */}
                    </div>
                    <div onMouseEnter={() => setsubroute({ ...showsubroute, mobiles: true })} onMouseLeave={() => setsubroute({ ...showsubroute, mobiles: false })}>
                        <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} to="/mobiles"><h3>Mobiles</h3></NavLink>
                        {showsubroute.mobiles && (
                            <div className='subroute mobile'>
                                <div className='subroute1'>
                                    <h5 className='subroutetitle'>Mobiles</h5>
                                    <NavLink to={`/dynamic/${sam[0]}`}><h4 className='subroutename'>Samsung</h4></NavLink>
                                    <NavLink to={`/dynamic/${sam[1]}`}><h4 className='subroutename'>Mi</h4></NavLink>
                                    <NavLink to={`/dynamic/${sam[2]}`}><h4 className='subroutename'>Oneplus</h4></NavLink>
                                    <NavLink to={`/dynamic/${sam[3]}`}><h4 className='subroutename'>realme</h4></NavLink>
                                    <NavLink to={`/dynamic/${sam[4]}`}><h4 className='subroutename'>Iqoo</h4></NavLink>
                                </div>
                                <div className='subroute2'>
                                    <h5 className='subroutetitle'>Accessories</h5>
                                    <NavLink to={`/dynamic/${sam[6]}`}><h4 className='subroutename'>Mobile Chargers</h4></NavLink>
                                    <NavLink to={`/dynamic/${sam[5]}`}><h4 className='subroutename'>Mobile Cases</h4></NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                    <div onMouseEnter={() => setsubroute({ ...showsubroute, electronics: true })} onMouseLeave={() => setsubroute({ ...showsubroute, electronics: false })}>
                        <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} to="/electronics"><h3>Electronics</h3></NavLink>
                        {showsubroute.electronics && (
                            <div className='subroute electronics'>
                                <div className='subroute1'>
                                    <h5 className='subroutetitle'>Laptops</h5>
                                    <NavLink to={`/dynamic/${elec[0]}`}><h4 className='subroutename'>DELL</h4></NavLink>
                                    <NavLink to={`/dynamic/${elec[1]}`}><h4 className='subroutename'>HP</h4></NavLink>
                                    <NavLink to={`/dynamic/${elec[2]}`}><h4 className='subroutename'>ACER</h4></NavLink>
                                </div>
                                <div className='subroute2'>
                                    <h5 className='subroutetitle'>Wireless headphones</h5>
                                    <NavLink to={`/dynamic/${elec[3]}`}><h4 className='subroutename'>Headphone</h4></NavLink>
                                    <NavLink to={`/dynamic/${elec[4]}`}><h4 className='subroutename'>Earbuds</h4></NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                    <div onMouseEnter={() => setsubroute({ ...showsubroute, iphone: true })} onMouseLeave={() => setsubroute({ ...showsubroute, iphone: false })}>
                        <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} to="/iphone"><h3>Iphones</h3></NavLink>
                        {showsubroute.iphone && (
                            <div className='subroute iphone'>
                                <div className='subroute1'>
                                    <h5 className='subroutetitle'>Iphones</h5>
                                    <NavLink to={`/dynamic/${iph[0]}`}><h4 className='subroutename'>Iphone 13</h4></NavLink>
                                    <NavLink to={`/dynamic/${iph[1]}`}><h4 className='subroutename'>Iphone 14</h4></NavLink>
                                    <NavLink to={`/dynamic/${iph[2]}`}><h4 className='subroutename'>Iphone 15</h4></NavLink>
                                </div>
                                <div className='subroute2'>
                                    <h5 className='subroutetitle'>Accessories</h5>
                                    <NavLink to={`/dynamic/${iph[3]}`}><h4 className='subroutename'>icases</h4></NavLink>
                                    <NavLink to={`/dynamic/${iph[4]}`}><h4 className='subroutename'>ichargers</h4></NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                    <div onMouseEnter={() => setsubroute({ ...showsubroute, watch: true })} onMouseLeave={() => setsubroute({ ...showsubroute, watch: false })}>
                        <NavLink className="navlink" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "" })} to="/watches"><h3>Watches</h3></NavLink>
                        {showsubroute.watch && (
                            <div className='subroute watch'>
                                <div className='subroute1'>
                                    <h5 className='subroutetitle'>Oldstyle</h5>
                                    <NavLink to={`/dynamic/${wat[0]}`}><h4 className='subroutename'>Titan</h4></NavLink>
                                    <NavLink to={`/dynamic/${wat[1]}`}><h4 className='subroutename'>Fastrack</h4></NavLink>
                                </div>
                                <div className='subroute2'>
                                    <h5 className='subroutetitle'>Smart</h5>
                                    <NavLink to={`/dynamic/${wat[2]}`}><h4 className='subroutename'>Smartwatch</h4></NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='searchboxdiv'>
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

                </div>
            </div>

        </div>
    )
}

export default NavbarCompo
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Compo/Home'
import All from '../Compo/All'
import Mobiles from '../Compo/Mobiles'
import Electronics from '../Compo/Electronics'
import Watches from '../Compo/Watches'
import NavbarCompo from '../Navbar/NavbarCompo'
import Iphone from '../Compo/Iphone'
import DataStore from '../DataStore/DataStore'
import ProductPage from '../Compo/ProductPage'
import Register from '../Register_Login/Register'
import Login from '../Register_Login/Login'

function RouteCompo() {
    return (
        <div>
            <NavbarCompo />
            <DataStore>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/all" element={<All />}></Route>
                    <Route path="/Mobiles" element={<Mobiles />}></Route>
                    <Route path='/electronics' element={<Electronics />}></Route>
                    <Route path='/iphone' element={<Iphone />}></Route>
                    <Route path='/watches' element={<Watches />}></Route>
                    <Route path="/product/:id" element={<ProductPage />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </DataStore>
        </div>
    )
}

export default RouteCompo
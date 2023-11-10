import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Compo/Home'
import All from '../Compo/All'
import Mobiles from '../Compo/Mobiles'
import Electronics from '../Compo/Electronics'
import Watches from '../Compo/Watches'
import NavbarCompo from '../Navbar/NavbarCompo'
import Iphone from '../Compo/Iphone'
import Test2 from '../Compo/Test2'
import DataStore from '../DataStore/DataStore'
import ProductPage from '../Compo/ProductPage'

function RouteCompo() {
    return (
        <div>
            <NavbarCompo />
            <DataStore>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/test" element={<Test2 />}></Route>
                    <Route path="/all" element={<All />}></Route>
                    <Route path="/Mobiles" element={<Mobiles />}></Route>
                    <Route path='/electronics' element={<Electronics />}></Route>
                    <Route path='/iphone' element={<Iphone />}></Route>
                    <Route path='/watches' element={<Watches />}></Route>
                    <Route path="/product/:id" element={<ProductPage />}></Route>
                </Routes>
            </DataStore>
        </div>
    )
}

export default RouteCompo
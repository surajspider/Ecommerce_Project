import React, { useContext, useState } from 'react'
import { storeData } from '../DataStore/DataStore';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Watches() {
    const [datas] = useContext(storeData);
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const filtereddatas = datas.filter(item => (item.category === "watch" || item.category === "smartwatch"));
    const divisibleby4 = Math.floor(filtereddatas.length / 4) * 4;
    const selectedDatasby4 = filtereddatas.slice(0, divisibleby4);
    const selecteddatas = selectedDatasby4.slice(startIndex, endIndex)
    console.log(filtereddatas);
    const isLastPage = endIndex >= filtereddatas.length;
    console.log("endindex", endIndex)
    console.log("data length:", filtereddatas.length)
    console.log("filtereddata", filtereddatas.length)
    // const shuffledDatas = [...filtereddatas].sort(() => Math.random() - 0.5);
    // const selectedDatas = shuffledDatas.slice(0, 8);
    const navi = useNavigate();
    const addtocartfun = (event) => {
        navi("/cart");
        event.preventDefault();
    }
    const handleNextPage = () => {
        if (endIndex < datas.length) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };
    const wat = ["titan", "fastrack", "smartwatch"];
    return (
        <div>
            <div className='mobile_parentdiv'>
                <div className='mobile_routediv'>
                    <h2 className='mobile_route_h2'>Old Style</h2>
                    <NavLink className='mobile_route_nav' to={`/dynamic/${wat[0]}`}><h3>Titan</h3></NavLink>
                    <NavLink className='mobile_route_nav' to={`/dynamic/${wat[1]}`}><h3>Fastrack</h3></NavLink>
                    <h2 className='mobile_route_h2'>Smart</h2>
                    <NavLink className='mobile_route_nav' to={`/dynamic/${wat[2]}`}><h3>Smartwatches</h3></NavLink>
                </div>
                <div className='mobile_itemsparent'>
                    {selecteddatas.map((item, index) => {
                        return (
                            <div className='mobile_itemdiv' key={index}>
                                <Link style={{ textDecoration: "none", color: "black" }} to={`/product/${item.id}`}>
                                    <div className='mobile_imgdiv'>
                                        <img className='imgfil' src={item.image} alt='not found' />
                                    </div>
                                    <div className='mobile_contentdiv'>
                                        <h4 className='pname'>{item.pname}</h4>
                                        <h4 className='price'><span className='strike'>Rs. {item.originalPrice} </span> Rs. {item.offerPrice}</h4>
                                    </div>
                                    <button className='cartbutton' onClick={(event) => addtocartfun(event)}>Add to cart</button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className='previousnext_but'>
                    <button className='prevbut' onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <button className='prevbut' onClick={handleNextPage} disabled={isLastPage}>
                        Next
                    </button>
                </div>
            </div >
            <Footer />
        </div>
    )
}
export default Watches
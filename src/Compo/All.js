import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { storeData } from '../DataStore/DataStore';
import Footer from './Footer';
import CartButton from '../Cart/CartButton';

function All() {
    const [datas] = useContext(storeData);
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const shuffledDatas = [...datas].sort(() => Math.random() - 0.5);
    // const selectedDatas = shuffledDatas.slice(0, 8);
    // const filtereddatas = datas.filter(item => item.category === "mobile");
    const selecteddatas = shuffledDatas.slice(startIndex, endIndex)
    // console.log(filtereddatas);
    const isLastPage = endIndex >= shuffledDatas.length;
    console.log("endindex", endIndex)
    console.log("data length:", shuffledDatas.length)
    console.log("filtereddata", shuffledDatas.length)
    // const shuffledDatas = [...filtereddatas].sort(() => Math.random() - 0.5);
    // const selectedDatas = shuffledDatas.slice(0, 8);
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
    return (
        <div className='all_parent'>
            <h1 className='dynamictopic'>All Products</h1>
            <div className='all_itemsparent'>
                {selecteddatas.map((item, index) => {
                    return (
                        <div className='all_itemdiv' key={index}>
                            <Link style={{ textDecoration: "none", color: "black" }} to={`/product/${item.id}`}>
                                <div className='all_imgdiv'>
                                    <img className='imgfil' src={item.image} alt='not found' />
                                </div>
                                <div className='all_contentdiv'>
                                    <h4 className='pname'>{item.pname}</h4>
                                    <h4 className='price'><span className='strike'>Rs. {item.originalPrice} </span> Rs. {item.offerPrice}</h4>
                                </div>
                            </Link>
                            <CartButton item={item} />
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
            <Footer />
        </div >
    )
}

export default All
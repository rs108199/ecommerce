"use client"

import { getProducts } from '@/services/apiHelper'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';


function ProductList() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        getProducts().then((res) => setProductList(res));
    }, [])
    return (
    <>
    <div className='grid grid-cols-[1fr_1fr_1fr_1fr] mx-16 gap-6'>
       {productList.map((product) => <ProductCard product={product}/>)} 
    </div>
    
    </>
  )
}

export default ProductList
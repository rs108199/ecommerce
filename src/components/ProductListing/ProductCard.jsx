import { addToCart } from '@/lib/reducer/cartReducer';
import { Delete, ShoppingCart, Star, Trash, Trash2 } from 'lucide-react';
import React from 'react'
import { useDispatch } from 'react-redux';

function ProductCard({ product }) {
    const dispatch = useDispatch();
    return (

        <div className='shadow-2xl rounded-[8px] my-6' key={`${product.title}-${product.id}`}>
            <div className='bg-[lightgray] rounded-t-[8px]'>
                <img src={product.thumbnail} alt="" />
            </div>
            <div className='px-2'>
                <div className='text-[10px] text-[blue]'>
                    {product.category}
                </div>
                <div className='min-h-8 text-[12px]'>
                    {product.title}
                </div>
                <div className='flex justify-between'>
                    <div>{product.price}</div>
                    <div className='flex'><div>⭐</div>
                        <div>
                            {product.rating}
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <button className='bg-blue-500 w-full text-white px-2 py-1 rounded-[8px] my-3 text-left '>
                        <div className='flex' onClick={() => dispatch(addToCart(product))}>
                            <ShoppingCart style={{ marginRight: "6px" }} /><div className='text-[14px] flex items-center'>Add to Cart</div>
                        </div>
                    </button>
                    <div className='px-2 py-1 my-3 bg-red-300 ml-1 rounded-[8px]'><Trash2 style={{ color: "red" }} /></div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
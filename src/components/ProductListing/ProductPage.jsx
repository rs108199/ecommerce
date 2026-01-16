import React from 'react'
import ProductList from '.'

function ProductPage() {
    return (
        <div className='max-w-[1440px] mx-auto bg-[#F9FAFB]'>
            <div className='w-full flex justify-between px-16 my-6'>
                
                    <div>
                        <div className='text-[24px] font-[400] text-[#101828]'>Products</div>
                        <div className='text-[gray] text-[16px]'>Manage your Product Inventory</div>
                    </div>
                    <div>
                        <button className='bg-blue-500 text-white px-2 py-1 rounded-[8px] my-3 text-[20px]'>+ Add Product</button>

                    </div>
            </div>
            <ProductList />
        </div>
    )
}

export default ProductPage
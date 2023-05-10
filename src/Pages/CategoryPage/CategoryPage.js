import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../Contexts/ThemeContext';
import Product from '../../Components/Shared/Product';

const CategoryPage = () => {
    const {category} = useParams();
    const {categoryProducts ,products} = useContext(ThemeContext)
    return (
        <div className='2xl:w-[65%] md:w-[75%] mx-auto mb-20'>
            <h1 className='font-bold my-10'>{category.toUpperCase()}</h1>
            <div className="grid gap-6 grid-cols-4">
                {
                    categoryProducts?.map(product=><Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default CategoryPage;
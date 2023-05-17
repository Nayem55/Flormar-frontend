import useProduct from "../../Hooks/useProduct";
import Product from "../Shared/Product";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { useContext } from "react";
import './FeaturedCollection.css'


const FeaturedCollection = () => {
    const { products } = useContext(ThemeContext);

    const featureCollection = products?.filter(product=>product.category.toLowerCase()==="perfume").slice(42,52)
    return (
        <div className="featured-collections">
            <h2 className="text-center text-xl font-bold my-[50px]">FEATURED COLLECTION</h2>
            <div className="grid grid grid-cols-2  sm:grid-cols-5 sm:gap-6 featuredCollection">
                {
                    featureCollection?.map(product=><Product product={product}></Product>)
                }
            </div>

        </div>
    );
};

export default FeaturedCollection;
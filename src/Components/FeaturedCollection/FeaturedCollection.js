import useProduct from "../../Hooks/useProduct";
import Product from "../Shared/Product";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { useContext } from "react";


const FeaturedCollection = () => {
    const { products } = useContext(ThemeContext);

    const featureCollection = products?.filter(product=>product.category.toLowerCase()==="perfume").slice(42,52)
    return (
        <div className="">
            <h2 className="text-center text-xl font-bold my-[50px]">FEATURED COLLECTION</h2>
            <div className="grid grid-cols-5 gap-6 featuredCollection">
                {
                    featureCollection?.map(product=><Product product={product}></Product>)
                }
            </div>

        </div>
    );
};

export default FeaturedCollection;
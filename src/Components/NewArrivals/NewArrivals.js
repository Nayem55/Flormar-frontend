import useProduct from "../../Hooks/useProduct";
import Product from "../Shared/Product";

const NewArrivals = () => {
    const [products] = useProduct()
    const newArrivals = products?.filter(product=>product.category.toLowerCase()==="perfume").slice(29,37)
    return (
        <div className="">
            <h1 className="text-center text-xl font-bold mb-[50px]">NEW ARRIVALS</h1>
            <div className="grid gap-6 grid-cols-4">
                {
                    newArrivals?.map(product=><Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default NewArrivals;

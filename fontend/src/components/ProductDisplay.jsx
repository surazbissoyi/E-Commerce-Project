import React, { useContext } from 'react';
import { ShopContext } from "../Context/ShopContext";
import { MdStar } from "react-icons/md";

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    const handleAddToCart = (productId) => {
        addToCart(productId);
    };

    return (
        <section>
            <div className="flex flex-col gap-14 xl:flex-row">
                {/* left side */}
                <div className="">
                    <div>
                        <img src={product.image} height={100} width={400} alt="" className="h-100 w-400"/>
                    </div>
                </div>
                {/* right side */}
                <div className="flex-col flex xl:flex-[1.7]">
                    <h3 className="h3">{product.name}</h3>
                    <div className="flex gap-x-2 text-secondary medium-22">
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <p>(111)</p>
                    </div>
                    <div className="flex gap-x-6 medium-20 my-4">
                        <div className="line-through">₹ {product.old_price}</div>
                        <div className="text-secondary">₹ {product.new_price}</div>
                    </div>
                    <div className="mb-4">
                        <div className="flex flex-col gap-y-3 mb-4 max-w-[555px]">
                            <button 
                                onClick={() => handleAddToCart(product.id)}
                                className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest"
                            >
                                Add to cart
                            </button>

                            <button 
                                onClick={() => handleAddToCart(product.id)}
                                className="btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest"
                            >
                                Buy it now
                            </button>
                        </div>
                        <p><span className="medium-16 text-tertiary">Category : </span> Pet | Food</p>
                        <p><span className="medium-16 text-tertiary">Tags : </span> Healthy | Protein | Calcium</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDisplay;

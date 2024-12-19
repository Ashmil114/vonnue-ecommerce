import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Product } from "../../api/product.api";
import Stars from "../Home/Stars";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Cart, useCart } from "../../store/cartStore";

const ProductCard = (props: Product) => {
  const [carted, setCarted] = useState(false);
  const [cartItem, setcartItem] = useState<Cart>();
  const { cart, addItem, removeItem } = useCart();

  useEffect(() => {
    if (cart) {
      const item = cart.find((item) => item.product.id === props.id);
      if (item) {
        setCarted(true);
        setcartItem(item);
      } else {
        setCarted(false);
      }
    }
    console.log(cart);
  }, [setcartItem, cart, props]);
  return (
    <div className=" basis-auto lg:w-1/5  md:w-1/3 w-1/2 px-[5px] ">
      <div className="group ">
        <div className="mb-[20px] relative bg-[#fff] border-[1px] border-[#ececec] rounded-[15px] overflow-hidden transition ">
          {/* Image */}
          <div className="overflow-hidden px-[25px] pt-[25px] ">
            <div className="overflow-hidden rounded-[15px] relative  aspect-square">
              <img
                src={props.images[0]}
                alt=""
                className="w-full h-full max-w-full group-hover:hidden  transition  "
              />
              <img
                src={props.images[1]}
                alt=""
                className="w-full h-full max-w-full hidden group-hover:block transition "
              />
            </div>
          </div>
          {/* Details */}
          <div className="px-[20px] pb-[20px] min-h-[250px] flex flex-col justify-between  ">
            <Link to={`/product/${props.id}`} className="flex-1">
              {/* Category */}
              <div className="mb-[5px] ">
                <span className="text-[12px] text-secondary-content ">
                  {props.category}
                </span>
              </div>
              {/* title */}
              <h2 className="mb-[11px] text-[16px] font-bold leading-[1.2] text-secondary">
                {props.name}
              </h2>
              {/* Rating */}
              <div className="w-[78px] relative ">
                <div className="mb-[2px] -ml-[8px] flex items-center gap-3">
                  <Stars id={props.id} rate={props.rating} extra="rating-sm" />
                  <span className="text-secondary-content">
                    {props.total_reviews}
                  </span>
                </div>
              </div>
              {/* Distributor */}
              <div>
                <span className="text-secondary-content">
                  By <span className="text-primary">{props.seller}</span>
                </span>
              </div>
            </Link>

            {/* Price & Cart Section */}
            <div className="flex justify-between mt-[12px] flex-col gap-2 lg:flex-row lg:flex-wrap">
              {/* Price */}
              <div className="pt-[5px] flex items-end">
                <span className="mr-[4px] text-[18px] text-primary font-bold">
                  ₹{props.price}
                </span>
                <span className="text-[14px] pb-[1px] text-secondary-content line-through">
                  ₹{props.mrp}
                </span>
              </div>
              {/* Add Cart */}
              {carted ? (
                <div className="cursor-pointer flex items-center gap-3 text-white">
                  <div
                    className="w-[35px] h-[40px] max-sm:w-full max-sm:h-[36px] bg-red-500 relative py-[6px] px-[13px]   flex rounded-md items-center max-sm:justify-center"
                    onClick={() => removeItem(props)}
                  >
                    -
                  </div>
                  <span className="whitespace-nowrap font-bold text-secondary max-sm:text-[12px] ">
                    {cartItem?.quantity}
                  </span>
                  <div
                    className="w-[35px] h-[40px] max-sm:w-full max-sm:h-[36px] bg-primary relative py-[6px] px-[13px]   flex rounded-md items-center max-sm:justify-center"
                    onClick={() => addItem(props)}
                  >
                    +
                  </div>
                </div>
              ) : (
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    addItem(props);
                    setCarted(true);
                  }}
                >
                  <div className="w-[76px] h-[40px] max-sm:w-full max-sm:h-[36px] bg-primary-bg relative py-[6px] px-[13px]  text-primary flex rounded-md items-center max-sm:justify-center">
                    <MdOutlineAddShoppingCart className="w-[20px] h-[20px] text-[15px] max-sm:hidden" />
                    <span className="whitespace-nowrap font-bold max-sm:text-[12px] ">
                      Add <span className="hidden max-sm:inline">to cart</span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

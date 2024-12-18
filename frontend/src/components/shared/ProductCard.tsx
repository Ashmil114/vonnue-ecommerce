import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Product } from "../../api/product.api";
import Stars from "../Home/Stars";
import { Link } from "react-router-dom";

const ProductCard = (props: Product) => {
  return (
    <div className=" basis-auto lg:w-1/5  md:w-1/3 w-1/2 px-[5px] ">
      <Link to={`/product/${props.id}`}>
        <div className="group">
          <div className="mb-[20px] relative bg-[#fff] border-[1px] border-[#ececec] rounded-[15px] overflow-hidden transition ">
            {/* Image */}
            <div className="overflow-hidden px-[25px] pt-[25px] ">
              <div className="overflow-hidden rounded-[15px] relative ">
                <img
                  src={props.images[0]}
                  alt=""
                  className="w-full h-auto max-w-full group-hover:hidden  transition"
                />
                <img
                  src={props.images[1]}
                  alt=""
                  className="w-full h-auto max-w-full hidden group-hover:block transition "
                />
              </div>
            </div>
            {/* Details */}
            <div className="px-[20px] pb-[20px] min-h-[250px] flex flex-col justify-between">
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

              {/* Price & Cart Section */}
              <div className="flex justify-between mt-[12px] max-sm:flex-col max-sm:gap-2 lg:flex-wrap">
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
                <div className="cursor-pointer">
                  <div className="w-[76px] h-[40px] max-sm:w-full max-sm:h-[36px] bg-primary-bg relative py-[6px] px-[13px]  text-primary flex rounded-md items-center max-sm:justify-center">
                    <MdOutlineAddShoppingCart className="w-[20px] h-[20px] text-[15px] max-sm:hidden" />
                    <span className="whitespace-nowrap font-bold max-sm:text-[12px] ">
                      Add <span className="hidden max-sm:inline">to cart</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

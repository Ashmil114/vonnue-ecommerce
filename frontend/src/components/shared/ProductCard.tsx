import { MdOutlineAddShoppingCart } from "react-icons/md";
const ProductCard = () => {
  return (
    <div className=" basis-auto lg:w-1/5  md:w-1/3 w-1/2 px-[5px]">
      <div className="group">
        <div className="mb-[20px] relative bg-[#fff] border-[1px] border-[#ececec] rounded-[15px] overflow-hidden transition">
          {/* Image */}
          <div className="overflow-hidden px-[25px] pt-[25px] ">
            <div className="overflow-hidden rounded-[15px] relative ">
              <img
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/product-4-1.jpg"
                alt=""
                className="w-full h-auto max-w-full group-hover:hidden  transition"
              />
              <img
                src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/product-4-2.jpg "
                alt=""
                className="w-full h-auto max-w-full hidden group-hover:block transition "
              />
            </div>
          </div>
          {/* Details */}
          <div className="px-[20px] pb-[20px]">
            {/* Category */}
            <div className="mb-[5px] ">
              <a href="" className="text-[12px] text-secondary-content ">
                Baking material
              </a>
            </div>
            {/* title */}
            <h2 className="mb-[11px] text-[16px] font-bold leading-[1.2] text-secondary">
              Foster Farms Takeout Crispy Classic
            </h2>
            {/* Rating */}
            <div className="w-[78px] relative ">
              <div className="mb-[2px] -ml-[8px] flex items-center gap-3">
                <div className="rating rating-sm rating-half">
                  <input
                    type="radio"
                    name="rating-10"
                    className="rating-hidden"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-1 bg-yellow-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-2 bg-yellow-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-1 bg-yellow-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-2 bg-yellow-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-1 bg-yellow-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-2 bg-yellow-400"
                    disabled
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-1 bg-yellow-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-2 bg-yellow-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-1 bg-yellow-400"
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    className="mask mask-star-2 mask-half-2 bg-yellow-400"
                    disabled
                  />
                </div>
                <span className="text-secondary-content">100</span>
              </div>
            </div>
            {/* Distributor */}
            <div>
              <span className="text-secondary-content">
                By{" "}
                <a href="" className="text-primary">
                  Country Crock
                </a>
              </span>
            </div>

            {/* Price & Cart Section */}
            <div className="flex justify-between mt-[12px] max-sm:flex-col max-sm:gap-2 lg:flex-wrap">
              {/* Price */}
              <div className="pt-[5px] flex items-end">
                <span className="mr-[4px] text-[18px] text-primary font-bold">
                  ₹200
                </span>
                <span className="text-[14px] pb-[1px] text-secondary-content line-through">
                  ₹300
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
    </div>
  );
};

export default ProductCard;

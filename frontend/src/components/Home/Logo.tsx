import { GiTomato } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";

const Logo = () => {
  return (
    <div className="flex flex-col items-start">
      <div>
        <a className="font-quicksand text-4xl font-bold text-primary flex max-sm:hidden">
          <span className="text-primary flex">
            <TiShoppingCart className="text-accent-yellow" />E
          </span>
          c
          <GiTomato className="text-red-600 " />m
        </a>
        <a className="font-quicksand text-2xl font-bold text-primary max-sm:flex hidden ">
          <span className="text-primary flex">E</span>com
        </a>
      </div>
      <div className="text-xs ml-[5px] text-secondary-content font-semibold whitespace-nowrap max-sm:hidden">
        Shopping Mart & Grocery
      </div>
    </div>
  );
};

export default Logo;

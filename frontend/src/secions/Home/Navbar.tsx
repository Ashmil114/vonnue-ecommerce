import { TiShoppingCart } from "react-icons/ti";
import { PiUserBold } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";
import NavItem from "../../components/Home/NavItem";
import { BiHomeAlt2 } from "react-icons/bi";
import { useUser } from "../../store/userStore";
import Logo from "../../components/Home/Logo";
import Searcher from "../../components/Home/Searcher";

import { useNavigate } from "react-router-dom";
import { useCart } from "../../store/cartStore";

const Navbar = () => {
  const navigate = useNavigate();
  const clearToken = useUser((state) => state.clearToken);
  const logout = () => {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      clearToken();
      clearCart();
    }
  };
  const { cart, clearCart } = useCart();

  return (
    <div className="bg-base-100   border-b-[1px]  custom-container fixed w-full top-0 left-0 right-0 z-40">
      <div className="flex items-center justify-between max-sm:gap-2 md:gap-0 lg:gap-[50px] lg:py-[30px]  navbar ">
        <Logo />
        {/* searcher */}
        <div className="hidden w-full lg:flex ">
          <Searcher />
        </div>

        <div className="flex-none">
          <NavItem
            icon={BiHomeAlt2}
            label="Home"
            action={() => navigate("/")}
          />
          {/* Cart */}
          <NavItem
            icon={TiShoppingCart}
            label="Cart"
            indicator={true}
            indicatorCount={cart.length}
            // action={() => navigate("/cart")}
          />
          {/* User Account */}
          <NavItem icon={PiUserBold} label="Account" />
          {/* Logout */}
          <NavItem
            icon={AiOutlineLogout}
            label="Logout"
            extra="text-accent-red"
            action={logout}
          />
        </div>
      </div>
      {/* searcher */}
      <div className="flex w-full lg:hidden px-[2px] mb-[10px]">
        <Searcher />
      </div>
    </div>
  );
};

export default Navbar;

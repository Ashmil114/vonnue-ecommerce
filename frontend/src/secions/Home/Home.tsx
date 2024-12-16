// import { useUser } from "../../store/userStore";

import Banner from "../../components/Home/Banner";
import CategorySection from "./CategorySection";
import ProductSection from "./ProductSection";

const Home = () => {
  // const logout = useUser((state) => state.clearToken);
  return (
    <div>
      <div className="custom-container  mt-[150px]">
        <Banner />
        <CategorySection />
        <ProductSection />
      </div>
    </div>
  );
};

export default Home;

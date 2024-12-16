// import { useUser } from "../../store/userStore";

import Banner from "../../components/Home/Banner";
import CategorySection from "./CategorySection";
import Footer from "./Footer";
import ProductSection from "./ProductSection";

const Home = () => {
  // const logout = useUser((state) => state.clearToken);
  return (
    <div>
      <div className="custom-container  top-margin">
        <Banner />
        <CategorySection />
        <ProductSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

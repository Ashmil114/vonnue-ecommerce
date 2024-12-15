// import { useUser } from "../../store/userStore";

import Banner from "../../components/Home/Banner";
import CategorySection from "../../components/Home/CategorySection";

const Home = () => {
  // const logout = useUser((state) => state.clearToken);
  return (
    <div>
      <div className="custom-container  mt-[150px]">
        <Banner />
        <CategorySection />
      </div>
    </div>
  );
};

export default Home;

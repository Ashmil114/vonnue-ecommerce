import { useUser } from "../../store/userStore";

const Home = () => {
  const logout = useUser((state) => state.clearToken);
  return <div onClick={logout}>Home</div>;
};

export default Home;

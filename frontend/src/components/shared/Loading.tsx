import Logo from "../Home/Logo";

const Loading = () => {
  return (
    <div className=" w-full flex justify-center items-center flex-col">
      <Logo />
      <span className="loading loading-dots loading-lg text-secondary"></span>
    </div>
  );
};

export default Loading;

import BannerImg from "../../assets/Home/banner.png";
const Banner = () => {
  return (
    <div className="w-full min-h-[438px] rounded-[30px] bg-primary-bg lg:py-[50px] lg:px-[100px] p-[30px] flex justify-between max-sm:flex-col mb-[35px]">
      <div className="flex flex-col md:min-h-[438px] justify-center w-auto">
        <h1 className="lg:text-[72px] md:text-[50px] text-[38px] leading-[1] font-bold mb-[40px]  text-secondary">
          Fresh Vegtables <br />
          Big discount
        </h1>
        <p className="lg:text-[30px] md:text-[18px] text-[16px] text-secondary-content mb-[65px]">
          Save up to 50% off on your first order
        </p>
        <div>
          <button className="btn bg-primary rounded-[10px] lg:btn-lg md:btn-md  text-white hover:bg-primary-accent">
            Shop Now
          </button>
        </div>
      </div>
      <div className="md:min-h-[438px] flex items-end  ">
        <img src={BannerImg} alt="" className="object-cover h-auto w-[350px]" />
      </div>
    </div>
  );
};

export default Banner;

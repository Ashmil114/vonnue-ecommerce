import Stars from "../../components/Home/Stars";
// type RatingType = {
//   rate: number | string;
//   count: number | string;
// };
const RatingCard = () => {
  return (
    <div className="lg:w-fit w-full bg-base-100 border-[1px] border-primary rounded-[25px] h-fit p-[30px] text-secondary">
      {/* Head */}
      <div>
        <h1 className="font-bold text-[24px] t">Reviews and ratings</h1>
        <div className="flex items-center gap-2">
          <div className="text-[80px] font-bold">4.6</div>
          <div className="">
            <div className="-ml-[8px] hidden md:inline">
              <Stars id="000" rate={4} extra="rating-lg" />
            </div>
            <div className="-ml-[8px] md:hidden">
              <Stars id="000" rate={4} extra="rating-md" />
            </div>
            <p className="leading-[.9] md:text-[18px] text-[12px] text-secondary-content text-center">
              Based on 223 ratings
            </p>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="flex flex-col gap-3 text-secondary-content">
        <div className="flex justify-between">
          <div className="-ml-[8px]">
            <Stars id="000" rate={1} extra="rating-sm" />
          </div>
          <div className="leading-[1]">20 reviews</div>
        </div>
        <div className="flex justify-between">
          <div className="-ml-[8px]">
            <Stars id="000" rate={2} extra="rating-sm" />
          </div>
          <div className="leading-[1]">0 reviews</div>
        </div>
        <div className="flex justify-between">
          <div className="-ml-[8px]">
            <Stars id="000" rate={3} extra="rating-sm" />
          </div>
          <div className="leading-[1]">0 reviews</div>
        </div>
        <div className="flex justify-between">
          <div className="-ml-[8px]">
            <Stars id="000" rate={4} extra="rating-sm" />
          </div>
          <div className="leading-[1]">200 reviews</div>
        </div>
        <div className="flex justify-between">
          <div className="-ml-[8px]">
            <Stars id="000" rate={5} extra="rating-sm" />
          </div>
          <div className="leading-[1]">3 reviews</div>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;

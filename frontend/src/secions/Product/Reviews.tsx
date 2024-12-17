import Title from "../../components/shared/Title";
import RatingCard from "./RatingCard";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className="border-t-[1px] mt-[50px]">
      <div className="custom-container py-[20px]">
        <Title
          title=" 223 Review(s) for Forest Farm Takeout Cripsy Classic"
          extra="text-[22px]"
        />
        <div className="flex gap-5">
          {/* Left Side */}
          <RatingCard />
          {/* Right Side */}
          <div>
            <div className="flex flex-col gap-3   pb-[10px] review-bg min-h-max">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
            <div className="w-full flex justify-center ">
              <div className="btn btn-link text-primary text-[16px]">
                See More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

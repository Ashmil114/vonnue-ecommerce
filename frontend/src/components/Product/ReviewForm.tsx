import { useState } from "react";
import Title from "../shared/Title";
import StarInput from "./StarInput";

type Reviewtype = {
  edit: boolean;
  rating: number | 0;
  review?: string;
};

const ReviewForm = (props: Reviewtype) => {
  const [userRate, setUserRate] = useState(props.edit ? props.rating : 0);

  const reviewHandler = () => {
    // e.preventDefault();
    console.log("Rating", userRate);
  };
  return (
    <div className="w-full">
      <Title
        title={`${props.edit ? "Edit your review" : "Add a review"}`}
        extra="text-[25px]"
      />
      <p className="text-secondary-content text-[14px]">
        Required fields are marked *
      </p>
      {/* Form */}
      <form action="" className="flex flex-col gap-5" onSubmit={reviewHandler}>
        {/* Rating */}

        <StarInput rateAction={setUserRate} rate={userRate} />
        {/* Your Review */}
        <label className="form-control">
          <div className="label">
            <span className="label-text text-[16px]">Your Review *</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-32"
            placeholder="Bio"
            value={props.edit ? props.review : ""}
          ></textarea>
        </label>
        {/* Submit Button */}
        <div className="flex justify-center">
          <input
            className="btn w-full bg-primary text-[14px] text-white "
            value="Submit Review"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;

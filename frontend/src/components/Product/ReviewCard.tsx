import { Review } from "../../api/product.api";
import Stars from "../Home/Stars";

const ReviewCard = (props: Review) => {
  return (
    <div className="w-full flex h-fit gap-3">
      <div className="avatar placeholder w-12 h-12">
        <div className="bg-neutral text-neutral-content  rounded-full">
          <span className="text-3xl">{props.customer.slice(0, 1)}</span>
        </div>
      </div>
      <div className="chat chat-bubble w-full bg-base-100 rounded-md border-[1px] ">
        <div className="flex justify-between">
          <p className="px-[16px] text-[18px] text-secondary">
            {props.customer}
          </p>
          <Stars id={props.id} rate={props.rating} extra="rating-sm" />
        </div>
        <div className="chat-bubble w-full bg-base-100 text-secondary-content">
          {props.review}
        </div>

        <div className="text-[14px] font-semibold text-secondary-content  text-end">
          {props.created}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

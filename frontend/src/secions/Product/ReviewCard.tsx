import Stars from "../../components/Home/Stars";

const ReviewCard = () => {
  return (
    <div className="w-full flex h-fit gap-3">
      <div className="avatar placeholder w-12 h-12">
        <div className="bg-neutral text-neutral-content  rounded-full">
          <span className="text-3xl">A</span>
        </div>
      </div>
      <div className="chat chat-bubble w-full bg-base-100 rounded-md border-[1px]">
        <div className="flex justify-between">
          <p className="px-[16px] text-[18px] text-secondary">Ashmil</p>
          <Stars id="122" rate={2} extra="rating-sm" />
        </div>
        <div className="chat-bubble w-full bg-base-100 text-secondary-content">
          It was said that you would, destroy the Sith, not join them. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Harum nam
          provident placeat quibusdam. Modi quas tenetur rem laborum, voluptatem
          natus, nihil accusamus mollitia expedita, eius facere aut quis libero
          aperiam?
        </div>

        <div className="text-[14px] font-semibold text-secondary-content  text-end">
          May 29 2023
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

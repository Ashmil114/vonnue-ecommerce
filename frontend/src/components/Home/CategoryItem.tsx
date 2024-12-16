import { CATEGORY_CARD_COLORS } from "../../constants/constants";
type categoryItem = {
  img: string;
  title: string;
  items: number;
};
const CategoryItem = (props: categoryItem) => {
  const color = Math.floor(Math.random() * CATEGORY_CARD_COLORS.length);

  return (
    <div className="min-h-[180px] mr-[20px] ">
      <div
        className={`flex items-center flex-wrap justify-center relative text-center rounded-[10px] pt-[20px] pb-[18px] border-[1px] border-[#F4F6FA]  hover:border-primary  min-w-[150px] group`}
        style={{ backgroundColor: CATEGORY_CARD_COLORS[color] }}
      >
        {/* image */}
        <div className="mb-[20px] group-hover:scale-105 transition  ">
          <img src={props.img} alt="" className="max-w-[80px] rounded-[10px]" />
        </div>
        <h1 className="w-full min-w-full text-[16px] text-secondary font-bold leading-[1.2]">
          {props.title}
        </h1>
        <span className="text-secondary-content-dark">
          {props.items} item(s)
        </span>
      </div>
    </div>
  );
};

export default CategoryItem;

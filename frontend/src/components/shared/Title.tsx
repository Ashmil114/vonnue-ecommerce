const Title = (props: { title: string; extra?: string; count?: number }) => {
  return (
    <div
      className={` text-secondary font-bold my-[15px] flex items-center justify-between gap-5 ${props.extra}`}
    >
      {props.title}{" "}
      <span className="text-primary font-semibold md:text-[22px] text-[18px] mr-[10px] whitespace-nowrap">
        {props.count ? `${props.count} item(s)` : null}
      </span>
    </div>
  );
};

export default Title;

const Title = (props: { title: string; extra?: string; count?: number }) => {
  return (
    <div
      className={` text-secondary font-bold my-[15px] flex items-center justify-between gap-5 ${props.extra}`}
    >
      {props.title}{" "}
      <span className="text-primary font-semibold text-[22px] mr-[10px] ">
        {props.count ? `${props.count} item(s)` : null}
      </span>
    </div>
  );
};

export default Title;

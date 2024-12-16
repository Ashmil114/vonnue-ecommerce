const Title = (props: { title: string; extra?: string }) => {
  return (
    <div className={` text-secondary font-bold my-[15px] ${props.extra}`}>
      {props.title}
    </div>
  );
};

export default Title;

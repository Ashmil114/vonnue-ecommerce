const Title = (props: { title: string }) => {
  return (
    <div className="text-[32px] text-secondary font-bold my-[15px]">
      {props.title}
    </div>
  );
};

export default Title;

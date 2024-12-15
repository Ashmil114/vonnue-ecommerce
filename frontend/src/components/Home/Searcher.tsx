const Searcher = () => {
  return (
    <div className="flex-1 w-full   ">
      <div className="form-control ">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered  md:w-auto  border-[2px] focus:outline-none focus:border-accent-yellow hover:border-accent-yellow"
        />
      </div>
    </div>
  );
};

export default Searcher;

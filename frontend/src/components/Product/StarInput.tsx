import { useEffect, useState } from "react";

const StarInput = ({
  rateAction,
  rate,
  pid,
}: {
  rateAction: (rate: number) => void;
  rate: number;
  pid: string | null;
}) => {
  const [stars, setStars] = useState([false, false, false, false, false]);
  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 5; i++) {
      newStars[i] = i < rate;
    }
    setStars([...newStars]);
  }, [rate]);
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text text-[16px]">Your rating *</span>
      </div>
      <div className="rating rating-lg">
        <input type="radio" name={`rating-${pid}`} className="rating-hidden" />

        {stars.map((s, index) => (
          <input
            key={index + 10}
            type="radio"
            name={`rating-${pid}`}
            className={`mask mask-star-2 ${s && "bg-yellow-400"}`}
            onClick={() => rateAction(index + 1)}
          />
        ))}
      </div>
    </label>
  );
};

export default StarInput;

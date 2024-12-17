import { useEffect, useState } from "react";

const StarInput = ({
  rateAction,
  rate,
}: {
  rateAction: (rate: number) => void;
  rate: number;
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
        <input type="radio" name={`rating-4`} className="rating-hidden" />
        {stars.map((s, index) => (
          <input
            key={index}
            type="radio"
            name={`rating-4`}
            className={`mask mask-star-2 ${
              s && "bg-green-500"
            } bg-secondary-content`}
            onClick={() => rateAction(index + 1)}
          />
        ))}
      </div>
    </label>
  );
};

export default StarInput;

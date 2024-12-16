import { useEffect, useState } from "react";

const Stars = (props: { id: string; rate: number }) => {
  const [stars, setStars] = useState([false, false, false, false, false]);

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 5; i++) {
      newStars[i] = i < props.rate;
    }
    setStars([...newStars]);
  }, [props.rate]);

  return (
    <div className="rating rating-sm ">
      <input
        type="radio"
        name={`rating-${props.id}`}
        className="rating-hidden"
      />
      {stars.map((s, index) => (
        <input
          key={index}
          type="radio"
          name={`rating-${props.id}`}
          className={`mask mask-star-2 ${
            s ? "bg-yellow-400" : "bg-secondary-content"
          }`}
          disabled
        />
      ))}
    </div>
  );
};

export default Stars;

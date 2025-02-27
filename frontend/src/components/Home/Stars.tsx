import { useEffect, useState } from "react";

const Stars = (props: { id: string; rate: number; extra?: string }) => {
  const [stars, setStars] = useState([false, false, false, false, false]);

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 5; i++) {
      newStars[i] = i < props.rate;
    }
    setStars([...newStars]);
  }, [props.rate]);

  return (
    <div className={`rating ${props.extra}  `}>
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
      {/* {props.rate === 0 && (
        <input
          type="radio"
          name={`rating-${props.id}`}
          className="rating-hidden"
          defaultChecked
        />
      )}
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <input
            key={index}
            type="radio"
            name={`rating-${props.id}`}
            className={`mask mask-star-2 bg-yellow-500  `}
            defaultChecked={props.rate === index + 1}
          />
        ))} */}
    </div>
  );
};

export default Stars;

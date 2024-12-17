import Magnifier from "react-magnifier";

const MagnifierImg = ({ image }: { image: string }) => {
  return (
    <div>
      {/* @ts-expect-error "Old Liberary" */}
      <Magnifier src={image} zoomFactor={1} mgWidth={200} mgHeight={200} />
    </div>
  );
};

export default MagnifierImg;

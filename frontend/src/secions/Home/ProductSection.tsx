import ProductCard from "../../components/shared/ProductCard";
import Title from "../../components/shared/Title";

const ProductSection = () => {
  return (
    <div className="mt-[35px]">
      <Title title="Popular Products" />
      <div className="flex  flex-wrap">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductSection;

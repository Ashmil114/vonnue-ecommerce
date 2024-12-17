import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../components/shared/ProductCard";
import Title from "../../components/shared/Title";
import { products } from "../../api/product.api";

const ProductSection = () => {
  const { data } = useQuery({
    queryKey: ["product", "id"],
    queryFn: () => products(),
  });
  return (
    <div className="mt-[35px]">
      <Title title="Popular Products" extra="text-[32px]" />
      <div className="flex  flex-wrap">
        {!Array.isArray(data) ? (
          <div>Loading...</div>
        ) : (
          data.map((product) => <ProductCard {...product} key={product.id} />)
        )}
      </div>
    </div>
  );
};

export default ProductSection;

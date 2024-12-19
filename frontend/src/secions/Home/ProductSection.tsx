import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../components/shared/ProductCard";
import Title from "../../components/shared/Title";
import { getProducts } from "../../api/product.api";
import { useProduct } from "../../store/productStore";
import { useEffect } from "react";

const ProductSection = () => {
  const { products, setProducts } = useProduct();
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProducts({}),
  });
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data, setProducts]);
  return (
    <div className="mt-[35px] ">
      <Title
        title="Popular Products"
        extra="text-[32px]"
        count={products.length}
      />
      <div className="flex  flex-wrap ">
        {products && products.length === 0 && (
          <p className="text-primary text-[18px] text-center py-[20px] h-[200px] flex justify-center w-full items-center">
            No products found.
          </p>
        )}
        {!Array.isArray(data) ? (
          <div>Loading...</div>
        ) : (
          products.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductSection;

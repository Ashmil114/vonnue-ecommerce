import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../components/shared/ProductCard";
import Title from "../../components/shared/Title";
import { getProducts } from "../../api/product.api";
import { useProduct } from "../../store/productStore";
import { useEffect } from "react";
import Loading from "../../components/shared/Loading";
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
        extra="md:text-[32px] text-[22px]"
        count={products?.length}
      />
      <div className="flex  flex-wrap ">
        {products && products.length === 0 && (
          <p className="text-primary text-[18px] text-center py-[20px] h-[200px] flex justify-center w-full items-center">
            No products found.
          </p>
        )}
        {!Array.isArray(products) ? (
          <div>
            <Loading />
          </div>
        ) : (
          products.map((product) => (
            // <ProductCard
            //   {...product}
            //   cart={
            //     cart.find((item) => item.product.id === product.id) || {
            //       product: product,
            //       quantity: 1,
            //     }
            //   }
            //   addCart={addItem}
            //   removeCart={removeItem}
            //   key={product.id}
            // />
            <ProductCard {...product} key={product.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductSection;

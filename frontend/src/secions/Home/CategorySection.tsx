import Title from "../../components/shared/Title";
import CategoryItem from "../../components/Home/CategoryItem";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { categories } from "../../api/category.api";
import { useProduct } from "../../store/productStore";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/product.api";
import { useLocation } from "react-router-dom";
const CategorySection = () => {
  const { setProducts } = useProduct();
  const [category, setCategory] = useState("");

  const location = useLocation();
  const { state } = location;
  const queryClient = useQueryClient();
  const { data: productData } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProducts({ category: category }),
    enabled: !!category,
  });
  const [allProductCount, setproductCount] = useState(productData?.length);
  const [morecategory, setMorecategory] = useState(state?.category);
  useEffect(() => {
    if (productData) {
      setProducts(productData);
      queryClient.invalidateQueries({ queryKey: ["product"] });
    }
    if (morecategory) {
      setCategory(morecategory);
      setMorecategory(null);
      window.scrollTo({ top: 550, behavior: "smooth" });
    }
    if (category === "") {
      setproductCount(productData?.length);
    }
  }, [productData, queryClient, morecategory, category, setProducts]);

  const { data: categoryData, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () => categories(),
  });
  return (
    <div>
      <Title
        title={`${category ? category : "Featured Categories"}`}
        extra="text-[32px]"
      />
      <div className="mb-[15px] flex flex-nowrap overflow-x-scroll category-scroll ">
        <CategoryItem
          title="All"
          img={""}
          items={allProductCount || 0}
          key={""}
          action={setCategory}
          all
        />

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          categoryData?.map((item) => (
            <CategoryItem
              title={item.name}
              img={item.image}
              items={item.count}
              key={item.id}
              action={setCategory}
              enabled={category}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CategorySection;

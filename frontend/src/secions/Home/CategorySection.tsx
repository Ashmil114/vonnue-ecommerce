import Title from "../../components/shared/Title";
import CategoryItem from "../../components/Home/CategoryItem";
import { useQuery } from "@tanstack/react-query";
import { categories } from "../../api/category.api";
const CategorySection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () => categories(),
  });
  return (
    <div>
      <Title title="Featured Categories" extra="text-[32px]" />
      <div className="mb-[15px] flex flex-nowrap overflow-x-scroll category-scroll ">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.map((item) => (
            <CategoryItem
              title={item.name}
              img={item.image}
              items={item.count}
              key={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CategorySection;

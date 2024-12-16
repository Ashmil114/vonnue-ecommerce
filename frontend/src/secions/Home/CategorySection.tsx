import Title from "../../components/shared/Title";
import CategoryItem from "../../components/Home/CategoryItem";
import { useEffect } from "react";
import { categories } from "../../api/category.api";

const CategorySection = () => {
  useEffect(() => {
    const data = categories();

    data.then((category) => {
      console.log(category);
    });
  }, []);
  return (
    <div>
      <Title title="Featured Categories" />
      <div className="mb-[15px] flex flex-nowrap overflow-x-scroll category-scroll ">
        <CategoryItem
          title="Fruits"
          img="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-2.png"
          items={10}
        />
        <CategoryItem
          title="Vegtables"
          img="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-1.png"
          items={5}
        />
        <CategoryItem
          title="Coffee & Tea"
          img="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-14.png"
          items={6}
        />
        <CategoryItem
          title="Fruits"
          img="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-2.png"
          items={10}
        />
        <CategoryItem
          title="Vegtables"
          img="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-1.png"
          items={5}
        />
        <CategoryItem
          title="Coffee & Tea"
          img="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-14.png"
          items={6}
        />
        <CategoryItem
          title="Fruits"
          img="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-2.png"
          items={10}
        />
        <CategoryItem
          title="Vegtables"
          img="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-1.png"
          items={5}
        />
        <CategoryItem
          title="Coffee & Tea"
          img="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-14.png"
          items={6}
        />
        <CategoryItem
          title="Fruits"
          img="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-2.png"
          items={10}
        />
        <CategoryItem
          title="Vegtables"
          img="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-1.png"
          items={5}
        />
        <CategoryItem
          title="Coffee & Tea"
          img="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/cat-14.png"
          items={6}
        />
      </div>
    </div>
  );
};

export default CategorySection;

import CategoryItem from "./CategoryItem";

const CategorySection = () => {
  return (
    <div>
      <div className="text-[32px] text-secondary font-bold my-[15px]">
        Featured Categories
      </div>
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

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useProduct } from "../../store/productStore";
import { useEffect, useState } from "react";
import { getProducts } from "../../api/product.api";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";

const Searcher = () => {
  const { setProducts } = useProduct();
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 300);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["product", value],
    queryFn: () => getProducts({ search: value }),
  });

  useEffect(() => {
    if (data) {
      setProducts(data);
      queryClient.invalidateQueries({ queryKey: ["product"] });
    }
  }, [data, queryClient, setProducts]);

  const handleFocus = () => {
    navigate("/");
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  return (
    <div className="flex-1 w-full">
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered md:w-auto border-[2px] focus:outline-none focus:border-accent-yellow hover:border-accent-yellow"
          onChange={(e) => setSearch(e.target.value)}
          onFocus={handleFocus}
        />
      </div>
    </div>
  );
};

export default Searcher;

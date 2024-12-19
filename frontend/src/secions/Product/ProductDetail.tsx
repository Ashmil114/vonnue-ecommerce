import { useNavigate, useParams } from "react-router-dom";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import Stars from "../../components/Home/Stars";
import Breadcrumb from "../../components/shared/Breadcrumb";
import Title from "../../components/shared/Title";
import MagnifierImg from "../../components/shared/MagnifierImg";
import Reviews from "./Reviews";
import { productDetail } from "../../api/product.api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Cart, useCart } from "../../store/cartStore";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [pimage, setPimage] = useState<string[]>([]);
  const [imgIndex, setImgIndex] = useState(0);
  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => productDetail({ id: id! }),
    enabled: id !== null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.images) {
      setPimage(data.images);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [data]);
  const [carted, setCarted] = useState(false);
  const [cartItem, setcartItem] = useState<Cart>();
  const { cart, addItem, removeItem } = useCart();

  useEffect(() => {
    if (cart) {
      const item = cart.find((item) => item.product.id === id);
      if (item) {
        setCarted(true);
        setcartItem(item);
      } else {
        setCarted(false);
      }
    }
    console.log(cart);
  }, [setcartItem, cart, id]);
  const productData = {
    category: data?.category || "",
    description: data?.description || "",
    id: data?.id || "",
    images: data?.images || [],
    mrp: data?.mrp || "",
    name: data?.name || "",
    price: data?.price || "",
    rating: data?.rating || 0,
    seller: data?.seller || "",
    total_reviews: data?.total_reviews || 0,
  };
  // console.log(data);
  return (
    <div className="  top-margin">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="custom-container">
            {/* BreadCrumb */}
            <div>
              <Breadcrumb
                items={[
                  { title: "Home", route: "/" },
                  { title: `${data?.category}` },
                  { title: `${data?.name}` },
                ]}
              />
            </div>
            {/* BODY  */}
            <div className="">
              <Title title={data?.name || ""} extra="text-[38px] mb-[6px]" />
              {/* Title & Rating */}
              <div className="flex items-center gap-5 pb-[18px] mb-[15px]">
                <div className="ml-[-8px]">
                  <Stars
                    id={data?.id || "14718"}
                    rate={data?.rating || 0}
                    extra="rating-md"
                  />
                </div>
                <span className="text-primary text-[14px]">
                  ({data?.total_reviews} customers review)
                </span>
              </div>
              {/* Product Image & details  */}
              <div className="flex  text-[18px] flex-col lg:flex-row">
                {/* Images */}
                <div className="basis-auto lg:px-[12px] lg:w-1/3 ">
                  <div className="relative">
                    <div className="overflow-hidden relative lg:ml-[90px] ml-[40px] rounded-[6px] ">
                      <div className="relative overflow-hidden  ">
                        <MagnifierImg image={pimage[imgIndex]} />
                      </div>
                    </div>

                    <ol className="md:w-[80px] w-[60px] absolute top-0 left-0  ">
                      <div className="md:h-[320px] h-[180px]  relative overflow-scroll hide-scrollbar">
                        {pimage.map((img, index) => (
                          <li
                            className="pr-[5px] pb-[5px] w-full h-auto cursor-pointer"
                            key={index}
                          >
                            <img
                              src={img}
                              alt=""
                              className={`p-[10px] border-[1px] w-full h-auto rounded-[6px] border-primary  ${
                                imgIndex === index
                                  ? "opacity-100"
                                  : "opacity-30"
                              }`}
                              onClick={() => {
                                setImgIndex(pimage.indexOf(img));
                              }}
                            />
                          </li>
                        ))}
                      </div>
                    </ol>
                  </div>
                </div>
                {/* Detail */}
                <div className="basis-auto lg:px-[30px] lg:w-2/3 flex flex-col gap-5 justify-between">
                  <div className="flex flex-col gap-2">
                    {/* Price */}
                    <div className="pt-[5px] flex items-end ">
                      <span className="mr-[4px] text-[28px] text-primary font-bold">
                        ₹{data?.price}
                      </span>
                      <span className="text-[24px] pb-[1px] text-secondary-content line-through">
                        ₹{data?.mrp}
                      </span>
                    </div>
                    {/* Description */}
                    <p className="text-justify text-[16px] text-secondary">
                      {data?.description}
                    </p>
                    {/* Category */}
                    <div className=" ">
                      <span className=" text-secondary-content text-[16px]">
                        {data?.category}{" "}
                        <a
                          className="underline text-blue-700 text-[14px] cursor-pointer"
                          onClick={() =>
                            navigate("/", {
                              state: { category: data?.category },
                            })
                          }
                        >
                          [more]
                        </a>
                      </span>
                    </div>
                    {/* Seller */}
                    <div>
                      <span className="text-secondary-content ">
                        By{" "}
                        <a href="" className="text-primary">
                          {data?.seller}
                        </a>
                      </span>
                    </div>
                  </div>
                  {carted ? (
                    <div className="cursor-pointer flex items-center gap-3 text-white">
                      <div
                        className="w-[35px] h-[40px] max-sm:w-full max-sm:h-[36px] bg-red-500 relative py-[6px] px-[13px]   flex rounded-md items-center max-sm:justify-center"
                        onClick={() => removeItem(productData)}
                      >
                        -
                      </div>
                      <span className="whitespace-nowrap font-bold text-secondary max-sm:text-[12px] ">
                        {cartItem?.quantity}
                      </span>
                      <div
                        className="w-[35px] h-[40px] max-sm:w-full max-sm:h-[36px] bg-primary relative py-[6px] px-[13px]   flex rounded-md items-center max-sm:justify-center"
                        onClick={() => addItem(productData)}
                      >
                        +
                      </div>
                    </div>
                  ) : (
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        addItem(productData);
                        setCarted(true);
                      }}
                    >
                      <div className="w-fit h-[50px] max-sm:w-full  bg-primary-bg relative py-[8px] px-[20px]  text-primary flex rounded-md items-center justify-center">
                        <MdOutlineAddShoppingCart className="w-[30px] h-[30px] text-[20px]" />
                        <span className="whitespace-nowrap font-bold max-sm:text-[12px] ">
                          Add to cart
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Review */}
          <Reviews
            count={data?.total_reviews || 0}
            rating={data?.rating_set || []}
            rate={data?.rating || 0}
            is_reviewed={data?.is_reviewed || false}
            user_review={data?.user_review || null}
            pid={data?.id || null}
            name={data?.name || null}
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

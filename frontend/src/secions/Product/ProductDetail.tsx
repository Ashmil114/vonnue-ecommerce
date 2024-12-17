// import { useParams } from "react-router-dom";

import { MdOutlineAddShoppingCart } from "react-icons/md";
import Stars from "../../components/Home/Stars";
import Breadcrumb from "../../components/shared/Breadcrumb";
import Title from "../../components/shared/Title";
import MagnifierImg from "../../components/shared/MagnifierImg";
import Reviews from "./Reviews";

const ProductDetail = () => {
  // const { id } = useParams();
  return (
    <div className="custom-container  top-margin">
      {/* BreadCrumb */}
      <div>
        <Breadcrumb
          items={[
            { title: "Home", route: "/" },
            { title: "Baking material" },
            { title: "Forest Farm Takeout Cripsy Classic" },
          ]}
        />
      </div>
      {/* BODY  */}
      <div className="">
        <Title
          title="Forest Farm Takeout Cripsy Classic"
          extra="text-[38px] mb-[6px]"
        />
        {/* Title & Rating */}
        <div className="flex items-center gap-5 pb-[18px] mb-[15px]">
          <div className="ml-[-8px]">
            <Stars id="555" rate={2} />
          </div>
          <span className="text-primary text-[14px]">(4 customers review)</span>
        </div>
        {/* Product Image & details  */}
        <div className="flex  text-[18px] flex-col lg:flex-row">
          {/* Images */}
          <div className="basis-auto lg:px-[12px] lg:w-1/3 ">
            <div className="relative">
              <div className="overflow-hidden relative lg:ml-[90px] ml-[40px] rounded-[6px] ">
                <div className="relative overflow-hidden  ">
                  <MagnifierImg image="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-14-1-min.jpg" />
                </div>
              </div>

              <ol className="md:w-[80px] w-[60px] absolute top-0 left-0  ">
                <div className="md:h-[320px] h-[180px]  relative overflow-scroll hide-scrollbar">
                  <li className="pr-[5px] pb-[5px] w-full h-auto cursor-pointer">
                    <img
                      src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-14-1-min.jpg"
                      alt=""
                      className="p-[10px] border-[1px] w-full h-auto rounded-[6px] border-primary"
                    />
                  </li>
                  <li className="pr-[5px] pb-[5px] w-full h-auto cursor-pointer ">
                    <img
                      src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-14-1-min.jpg"
                      alt=""
                      className="p-[10px] border-[1px] w-full h-auto rounded-[6px] border-primary/50 opacity-50"
                    />
                  </li>
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
                  ₹200
                </span>
                <span className="text-[24px] pb-[1px] text-secondary-content line-through">
                  ₹500
                </span>
              </div>
              {/* Description */}
              <p className="text-justify text-[16px] text-secondary">
                Uninhibited carnally hired played in whimpered dear gorilla
                koala depending and much yikes off far quetzal goodness and from
                for grimaced goodness unaccountably and meadowlark near
                unblushingly crucial scallop tightly neurotic hungrily some and
                dear furiously this apart. Spluttered narrowly yikes left moth
                in yikes bowed this that grizzly much hello on spoon-fed that
                alas rethought much decently richly and wow against the frequent
                fluidly at formidable acceptably flapped besides and much circa
                far over the bucolically hey precarious goldfinch mastodon
                goodness gnashed a jellyfish and one however because.
              </p>
              {/* Category */}
              <div className=" ">
                <a href="" className=" text-secondary-content ">
                  category{" "}
                  <a className="underline text-blue-700 text-[14px]">[more]</a>
                </a>
              </div>
              {/* Seller */}
              <div>
                <span className="text-secondary-content ">
                  By{" "}
                  <a href="" className="text-primary">
                    Seller
                  </a>
                </span>
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="w-fit h-[50px] max-sm:w-full  bg-primary-bg relative py-[8px] px-[20px]  text-primary flex rounded-md items-center justify-center">
                <MdOutlineAddShoppingCart className="w-[30px] h-[30px] text-[20px]" />
                <span className="whitespace-nowrap font-bold max-sm:text-[12px] ">
                  Add to cart
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Review */}
        <Reviews />
      </div>
    </div>
  );
};

export default ProductDetail;

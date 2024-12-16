// import { useParams } from "react-router-dom";

import Stars from "../../components/Home/Stars";
import Breadcrumb from "../../components/shared/Breadcrumb";
import Title from "../../components/shared/Title";

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
      <div>
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
        <div className="flex  ">
          {/* Images */}
          <div className="basis-auto px-[12px]">
            <div className="relative">
              <div className="overflow-hidden relative h-[278.5px] ml-[90px] rounded-[6px] ">
                <div className="relative overflow-hidden w-[276.5px] ">
                  <img
                    src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-14-1-min.jpg"
                    alt=""
                  />
                </div>
              </div>

              <ol className="w-[80px] absolute top-0 left-0 ">
                <div className="h-[320px] relative overflow-hidden">
                  <li className="pr-[5px] pb-[5px] w-full h-auto ">
                    <img
                      src="https://themepanthers.com/wp/nest/d3/wp-content/uploads/2022/11/product-14-1-min.jpg"
                      alt=""
                      className="p-[10px] border-[1px] w-full h-auto rounded-[6px] border-primary"
                    />
                  </li>
                </div>
              </ol>
            </div>
          </div>
          {/* Detail */}
          <div className="basis-auto px-[30px] ">
            <div className="pt-[5px] flex items-end">
              <span className="mr-[4px] text-[28px] text-primary font-bold">
                ₹200
              </span>
              <span className="text-[24px] pb-[1px] text-secondary-content line-through">
                ₹500
              </span>
            </div>
            <p>
              Uninhibited carnally hired played in whimpered dear gorilla koala
              depending and much yikes off far quetzal goodness and from for
              grimaced goodness unaccountably and meadowlark near unblushingly
              crucial scallop tightly neurotic hungrily some and dear furiously
              this apart. Spluttered narrowly yikes left moth in yikes bowed
              this that grizzly much hello on spoon-fed that alas rethought much
              decently richly and wow against the frequent fluidly at formidable
              acceptably flapped besides and much circa far over the bucolically
              hey precarious goldfinch mastodon goodness gnashed a jellyfish and
              one however because.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

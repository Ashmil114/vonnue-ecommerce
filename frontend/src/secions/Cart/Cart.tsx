import { useNavigate } from "react-router-dom";
import Title from "../../components/shared/Title";
import { useCart } from "../../store/cartStore";
import ToastMessage from "../../components/shared/ToastMessage";
import { useState } from "react";

const Cart = () => {
  const { cart, addItem, removeItem, clearCart } = useCart();
  const [order, setOrder] = useState(false);
  const navigate = useNavigate();
  const clearHandler = () => {
    const confirmClear = confirm("Are you sure you want clear your cart?");
    if (confirmClear) {
      clearCart();
    }
  };
  const orderHandler = () => {
    setOrder(true);
    clearCart();
  };

  return (
    <div className="top-margin custom-container mb-[100px]">
      {order && <ToastMessage msg="Order Successfull" err={false} />}
      <div className="flex justify-between items-center">
        <Title title="Cart" extra="text-[34px]" />
        {cart.length > 0 && (
          <span
            className="btn btn-link text-red-500 lg:mr-[100px] text-lg"
            onClick={clearHandler}
          >
            Clear cart
          </span>
        )}
      </div>
      {cart.length === 0 && (
        <div className="w-full h-[300px] text-primary font-semibold text-[26px] flex justify-center items-center flex-col">
          <div className="">No products on Cart</div>
          <span
            className="btn btn-link text-blue-500 text-lg"
            onClick={() => navigate("/")}
          >
            shop now
          </span>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="table table-lg">
          <tbody>
            {/* row 1 */}

            {cart
              .sort((a, b) => +a.product.price - +b.product.price)
              .map((item) => (
                <tr key={item.product.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-[80px] w-[80px]">
                          <img
                            src={item.product.images[0]}
                            alt="product image"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.product.name}</div>
                        <div className="text-sm opacity-50">
                          {item.product.category}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="cursor-pointer flex items-center gap-3 text-white">
                      <div
                        className="w-[35px] h-[40px] max-sm:w-full max-sm:h-[36px] bg-red-500 relative py-[6px] px-[13px]   flex rounded-md items-center max-sm:justify-center"
                        onClick={() => removeItem(item.product)}
                      >
                        -
                      </div>
                      <span className="whitespace-nowrap font-bold text-secondary max-sm:text-[12px] ">
                        {item.quantity}
                      </span>
                      <div
                        className="w-[35px] h-[40px] max-sm:w-full max-sm:h-[36px] bg-primary relative py-[6px] px-[13px]   flex rounded-md items-center max-sm:justify-center"
                        onClick={() => addItem(item.product)}
                      >
                        +
                      </div>
                    </div>
                  </td>
                  <td>₹ {item.quantity * parseInt(item.product.price)}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {cart.length > 0 && (
          <div className="lg:mr-[100px] mt-[30px] text-[24px] text-secondary">
            <div className="flex items-center gap-5 justify-end ">
              <div className="flex gap-5 w-[300px] justify-between">
                <div className="  ">Items</div>
                <div className=" font-bold">{cart.length}</div>
              </div>
            </div>
            <div className="flex items-center gap-5 justify-end ">
              <div className="flex gap-5 w-[300px] justify-between">
                <div className="text-start  ">Total</div>
                <div className=" font-bold">
                  ₹{" "}
                  {cart.reduce(
                    (acc, item) =>
                      acc + item.quantity * parseInt(item.product.price),
                    0
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 justify-end ">
              <div className="flex gap-5 w-[300px] justify-between">
                <button
                  className="btn w-full bg-primary mt-[20px] text-white hover:bg-primary-accent"
                  onClick={orderHandler}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

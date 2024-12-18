import { useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
const ToastMessage = ({ msg, err }: { msg: string; err: boolean }) => {
  const success = () =>
    toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const fail = () =>
    toast.error(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  useEffect(() => {
    if (err) {
      fail();
    } else success();

    // Clear the notification in 5 seconds
    setTimeout(() => toast.dismiss(), 5000); // 5 seconds
    // console.log("Toast");
    // eslint-disable-next-line
  }, [err, msg]);
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default ToastMessage;

import { useEffect, useState } from "react";
import { login, signup } from "../../api/auth.api";
// import { useNavigate } from "react-router-dom";
import { useUser } from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signupSchema, SignupSchema } from "../../validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import groceryImg from "../../assets/Auth/grocerySet.png";

function Login() {
  const [newuser, setNewuser] = useState(false);
  const { token, setToken } = useUser();
  const [formerror, setFormerror] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignupSchema>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(signupSchema),
  });

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });
  useEffect(() => {
    if (!newuser) {
      setValue("name", "xyz");
    } else setValue("name", "");
  }, [newuser, setValue]);
  const loginHandler = (values: SignupSchema) => {
    login({ email: values.email, password: values.password })
      .then((res) => {
        console.log(res);
        setToken(res.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setFormerror(err.error);
      });
  };

  const signupHandler = (values: SignupSchema) => {
    signup(values)
      .then((res) => {
        console.log(res);
        setToken(res.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setFormerror(err.error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen overflow-hidden relative">
      <div className=" lg:w-[800px] absolute  lg:-bottom-[75%] -bottom-0 ">
        <img src={groceryImg} alt="" className="object-cover w-full h-full " />
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse  ">
        <div className="text-center lg:text-left  ">
          <h1 className="text-5xl font-bold text-secondary-dark font-quicksand ">
            {newuser ? "Sign Up Now!" : "Login Now!"}
          </h1>
          <p className="py-6 lg:max-w-[75%]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form
            className="card-body"
            onSubmit={
              newuser ? handleSubmit(signupHandler) : handleSubmit(loginHandler)
            }
          >
            <p className="text-center text-red-500">{formerror}</p>
            {newuser && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />

                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <label className="label">
                <label className="label">
                  <div
                    className="label-text-alt link link-hover"
                    onClick={() => setNewuser((prev) => !prev)}
                  >
                    {newuser ? "Has Already Account? " : "New User?"}
                  </div>
                </label>
                {/* <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a> */}
              </label>
            </div>
            <div className="form-control mt-6">
              {newuser ? (
                <button className="btn bg-primary  text-white hover:bg-primary-accent">
                  Signup
                </button>
              ) : (
                <button className="btn bg-primary  text-white hover:bg-primary-accent">
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

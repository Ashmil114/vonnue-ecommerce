import { useEffect, useState } from "react";
import { signup } from "../../api/auth.api";
// import { useNavigate } from "react-router-dom";
import { useUser } from "../../store/userStore";
import { useNavigate } from "react-router-dom";

function Login() {
  const [newuser, setNewuser] = useState(false);
  const { token, setToken } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });
  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("login");
  };
  const signupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(e.target[0]);
    // TODO CHANGE DATA TO FORM DATA VALUES
    const data = {
      name: "ash",
      email: "",
      password: "",
    };
    signup(data)
      .then((res) => {
        console.log(res);
        setToken(res.token);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-secondary-dark">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form
            className="card-body"
            onSubmit={newuser ? signupHandler : loginHandler}
          >
            {newuser && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <label className="label">
                  <div
                    className="label-text-alt link link-hover"
                    onClick={() => setNewuser((prev) => !prev)}
                  >
                    {newuser ? "Has Already Account? " : "New User?"}
                  </div>
                </label>
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              {newuser ? (
                <button className="btn bg-primary-dark  text-white hover:bg-primary-medium">
                  Signup
                </button>
              ) : (
                <button className="btn bg-primary-dark  text-white hover:bg-primary-medium">
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

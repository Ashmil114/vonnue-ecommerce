import { api } from "./axios";
type Signup = {
  message: string;
  user: string;
  token: { refresh: string; access: string };
};
export const signup = (props: {
  name: string;
  email: string;
  password: string;
}) => {
  return new Promise<Signup>((res, rej) => {
    api
      .post("/customer/signup", {
        name: props.name,
        email: props.email,
        password: props.password,
      })
      .then((response) => {
        res(response.data);
      })
      .catch((err) => {
        rej(err.response.data);
      });
  });
};

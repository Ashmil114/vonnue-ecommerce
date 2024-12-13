import { api } from "./axios";
type Signup = {
  message: string;
  user: string;
  token: { refresh: string; access: string };
};
export const signup = () => {
  return new Promise<Signup>((res, rej) => {
    api
      .post("/customer/signup", {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
      })
      .then((response) => {
        res(response.data);
      })
      .catch((err) => {
        rej(err.response.data);
      });
  });
};

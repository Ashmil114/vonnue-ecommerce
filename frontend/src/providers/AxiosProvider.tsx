import { ReactNode, useEffect } from "react";
import { useUser } from "../store/userStore";
import { api } from "../api/axios";

const AxiosProvider = ({ children }: { children: ReactNode }) => {
  const { token, setToken, clearToken } = useUser();

  useEffect(() => {
    console.log("AXIOS Provider");

    api.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;

        console.log(error.config.url);

        if (typeof error.response === "undefined") {
          alert("Network error");
          return Promise.reject(error);
        }

        if (
          error.response.status === 401 &&
          originalRequest.url ===
            import.meta.env.VITE_API_ENDPOINT + "/token/refresh/"
        ) {
          clearToken();

          return Promise.reject(error);
        }

        if (
          error.response.data.code === "token_not_valid" &&
          error.response.status === 401
        ) {
          const refreshToken = token?.refresh;

          if (refreshToken) {
            const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

            // exp date in token is expressed in seconds, while now() returns milliseconds:
            const now = Math.ceil(Date.now() / 1000);

            if (tokenParts.exp > now) {
              console.log("EXPIRED ACCESS");
              return api
                .post("/customer/token/refresh", { refresh: refreshToken })
                .then(async (response) => {
                  setToken({
                    access: response.data.access,
                    refresh: refreshToken,
                  });

                  api.defaults.headers["Authorization"] =
                    "token " + response.data.access;
                  originalRequest.headers["Authorization"] =
                    "token " + response.data.access;

                  return api(originalRequest);
                })
                .catch((err) => {
                  console.log(err);
                });
            } else {
              console.log("Refresh token is expired", tokenParts.exp, now);
              clearToken();
            }
          } else {
            console.log("Refresh token not available.");
            clearToken();
          }
        }

        // specific error handling done elsewhere
        return Promise.reject(error);
      }
    );
  });

  return <>{children}</>;
};

export default AxiosProvider;

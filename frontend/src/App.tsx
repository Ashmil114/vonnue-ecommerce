import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./secions/Authentication/Login";
import Home from "./secions/Home/Home";
import ProtectedRoute from "./providers/ProtectedRoute";
import AxiosProvider from "./providers/AxiosProvider";
import Navbar from "./secions/Home/Navbar";

export default function App() {
  return (
    <AxiosProvider>
      <BrowserRouter>
        <ProtectedRoute>
          <Navbar />
        </ProtectedRoute>
        <Routes>
          <Route path="/auth" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AxiosProvider>
  );
}

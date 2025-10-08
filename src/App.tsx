import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Orders from "./pages/orders";
import Dashboard from "./pages/dashboard";
import Layout from "./components/layout";
import Login from "./pages/login";
import Signup from "./pages/signup";
import NotFound from "./pages/not-found";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App

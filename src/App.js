import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Compare from "./pages/Compare";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Purchase from "./pages/Purchase";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

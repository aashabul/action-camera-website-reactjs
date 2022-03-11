import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Compare from "./pages/Compare";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Purchase from "./pages/Purchase";
import Wishlist from "./pages/Wishlist";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./pages/Register";
import AddReview from "./components/AddReview";
import MyOrders from "./components/MyOrders";
import MyReviews from "./components/MyReviews";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/explore"
            element={
              <PrivateRoute>
                <Explore />
              </PrivateRoute>
            }
          />
          <Route
            path="/addReview"
            element={
              <PrivateRoute>
                <AddReview />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/myOrders"
            element={
              <PrivateRoute>
                <MyOrders />
              </PrivateRoute>
            }
          />
          <Route
            path="/myReviews"
            element={
              <PrivateRoute>
                <MyReviews />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

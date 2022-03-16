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
import MyCart from "./components/MyCart";
import MyReviews from "./components/MyReviews";
import MyWishlist from "./components/MyWishlist";
import Details from "./pages/Details";

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
            path="/details/:id"
            element={
              <PrivateRoute>
                <Details />
              </PrivateRoute>
            }
          />

          {/* <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <MyCart />
              </PrivateRoute>
            }
          /> */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <MyCart />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="cart"
              element={
                <PrivateRoute>
                  <MyCart />
                </PrivateRoute>
              }
            />
            <Route
              path="myReviews"
              element={
                <PrivateRoute>
                  <MyReviews />
                </PrivateRoute>
              }
            />
            <Route
              path="addReview"
              element={
                <PrivateRoute>
                  <AddReview />
                </PrivateRoute>
              }
            />
            <Route
              path="myWishlist"
              element={
                <PrivateRoute>
                  <MyWishlist />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

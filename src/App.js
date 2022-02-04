import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PortfolioProjects from "./pages/PortfolioProjects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<PortfolioProjects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

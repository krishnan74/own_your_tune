import { Navbar, Welcome, Footer, Services } from "./components";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import TestPage from "./pages/TestPage";
import UploadPage from "./pages/UploadPage";
import PurchasedPage from "./pages/PurchasedPage";

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/publishes" element={<UploadPage />} />
        <Route path="/purchases" element={<PurchasedPage />} />
        <Route path="/buy" element={<Welcome />} />
      </Routes>
    </Router>
  </>
);

export default App;

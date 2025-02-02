import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
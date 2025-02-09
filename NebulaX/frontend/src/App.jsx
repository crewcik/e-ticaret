import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Profile from './components/Profiles';
import Ürünler from './components/Shoping'
import { useParams } from 'react-router-dom';
import About from "./components/About";

function App() {

  const { id } = useParams();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path={`Profile:${id}`} element={<Profile />} />
        <Route path="Ürünler" element={<Ürünler />} />
        <Route path="Hakkımızda" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
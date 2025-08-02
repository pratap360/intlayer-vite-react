import { IntlayerProvider } from "react-intlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BlogViewer } from "./components/BlogViewer/BlogViewer";
import { Contribution } from "./pages/Contribution";
import About from "./pages/About";

function App() {
  return (
    <IntlayerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:postId" element={<BlogViewer />} />
          <Route path="/contribution" element={<Contribution />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </IntlayerProvider>
  );
}

export default App;
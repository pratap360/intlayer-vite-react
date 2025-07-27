import { IntlayerProvider } from "react-intlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

function App() {
  return (
    <IntlayerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/post/:id" element={<Post />} /> */}
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </IntlayerProvider>
  );
}

export default App;
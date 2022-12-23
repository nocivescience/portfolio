import { Navbar } from "./components/Navbar";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { FormData } from "./components/Form";
import { Portfolio } from "./components/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Background } from "./components/Background";
function App() {
  return (
    <>
    <Background/>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<FormData />} />
          <Route path="/port" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

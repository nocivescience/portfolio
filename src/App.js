import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { FormData } from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Home />
      <FormData name="Ricardo" lastname="fuentes" />
    </>
  );
}
export default App;

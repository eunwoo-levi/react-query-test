import { Route, Routes } from "react-router-dom";
import ReactQuery from "./pages/ReactQuery";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reactquery" element={<ReactQuery />} />
      </Routes>
    </main>
  );
}

export default App;

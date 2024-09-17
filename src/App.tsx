import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ReactQueryPage from "./pages/ReactQuery";
import ReactQueriesPage from "./pages/ReactQueries";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reactquery" element={<ReactQueryPage />} />
        <Route path="/reactqueries" element={<ReactQueriesPage />} />
      </Routes>
    </main>
  );
}

export default App;

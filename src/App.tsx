import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path={import.meta.env.BASE_URL} element={<Home />} />
          <Route
            path={import.meta.env.BASE_URL + "movie/:id"}
            element={<Detail />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;

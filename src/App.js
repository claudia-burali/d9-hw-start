import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const companySelected = useSelector((state) => state.companySelected.content);
  return (
    <BrowserRouter>
      <div>
        <Link to="/">
          <h1>EpicJobs</h1>
          {companySelected}
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

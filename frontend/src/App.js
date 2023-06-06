import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Dashboard_grassroot from "./components/Grassroot_worker.jsx/Dashboard1";
import Dashboard_casemanagement from "./components/Casemanagement.jsx/Dashboard2";
import "./styles/Header.scss";
import "./styles/App.scss";
import "./styles/Footer.scss";
import "./styles/Home.scss";
function App() {
  const login = false;
  return (
    <div className="App">
      <Router>
        <Header login={login} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/grassroot/dashboard"
            element={<Dashboard_grassroot />}
          />
          <Route
            path="/casemanagement/dashboard"
            element={<Dashboard_casemanagement />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

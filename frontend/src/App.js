import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Dashboard_grassroot from "./components/Grassroot_worker/Dashboard1";
import Dashboard_casemanagement from "./components/Casemanagement/Dashboard2";
import Dashboard_operational from "./components/Operational/Dashboard3";
import "./styles/Header.scss";
import "./styles/App.scss";
import "./styles/Footer.scss";
import "./styles/Home.scss";
import Dashboard_operational_analytics from "./components/Analytics/Dashboard3";
function App() {
  const login_details = {
    login: true,
  };
  return (
    <div className="App">
      <Router>
        <Header login_details={login_details} />
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
          <Route
            path="/operational/dashboard"
            element={<Dashboard_operational />}
          />
          <Route
            path="/operational/dashboard/analytics"
            element={<Dashboard_operational_analytics />}
          />

          {/* <Route path="/login" element={<Multistep />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

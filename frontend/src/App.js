import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Dashboard from "./components/Grassroot_worker.jsx/Dashboard";
import "./styles/Header.scss";
import "./styles/App.scss";
import "./styles/Footer.scss";
import "./styles/Home.scss";
import "./styles/Dashboard.scss";
function App() {
  const login = false;
  return (
    <div className="App">
      <Router>
        <Header login={login} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grassroot/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./styles/Header.scss";
import "./styles/App.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

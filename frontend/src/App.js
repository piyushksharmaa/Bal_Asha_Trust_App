import "./styles/Header.scss";
import "./styles/App.scss";
import AddChildrenDataPage from "./components/login-signup-front/Multistep";


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/Contact" element={< MultiStepForm />} />
          <Route path="/Donate" element={< DonationForm />} />
        </Routes>
        <Numbergrid />
      </Router> */}

      <AddChildrenDataPage />



    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Header from "./components/Header";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

import Header from "./Common/header/";
import Footer from "./Common/footer";
import Home from "./Component/home";
import Signin from "./Component/Form/Signin";
import Addproduct from "./Component/addproduct/addproduct";

function App() {
  return (
    <>
      {/* --------------------- */}
      {/* <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router> */}
      {/* --------------------- */}
      <Router>
        <div>
          <Header />

          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Addproduct" element={<Addproduct />} />
          </Routes>

          <Footer />
        </div>
      </Router>
      {/* --------------------- */}
      <ToastContainer />
    </>
  );
}

export default App;

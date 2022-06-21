import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Common/header/";
import Footer from "./Common/footer";
import Home from "./Component/home";
import Signin from "./Component/Form/Signin";
import Addproduct from "./Component/addproduct/addproduct";
import DetailProductPage from "./Component/home/DetailPage";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />

          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Addproduct" element={<Addproduct />} />
            <Route
              path="/product/:productId"
              component={<DetailProductPage />}
            />
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

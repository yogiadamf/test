import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PortfolioContainer from "./PortofolioContainer/PortofolioContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer/>
    </div>
  );
}

export default App;

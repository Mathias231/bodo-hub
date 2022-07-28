// Imports
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Import Components
import Navbar from "./Components/Navbar";

// Pages imports
import Home from "./Pages/Home";
import Weather from "./Pages/Weather";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

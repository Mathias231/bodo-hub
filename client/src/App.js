// Imports
import FetchWeatherData from "./Data/GetWeather";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Pages imports
import Home from "./Pages/Home";
import Weather from "./Pages/Weather";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

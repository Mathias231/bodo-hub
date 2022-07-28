// Imports
import FetchWeatherData from "./Data/GetWeather";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default App;

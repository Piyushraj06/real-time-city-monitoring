import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import LiveData from "./components/LiveData";
import Dashboard from "./components/Dashboard";
import PredictiveAnalysis from "./components/PredictiveAnalysis";
import SeherSuchna from "./components/SeherSuchna";
import NoisePollution from "./components/NoisePollution";
import WaterPollution from "./components/WaterPollution";
import CityDetail from "./components/CityDetail";
import WaterPollutionDetail from "./components/WaterPollutionDetail";
import AirPollutionDashboard from "./components/airPollutionPowerBi";

function App() {
  const { pathname } = useLocation();

  // Hide Navbar on city detail pages and seher page
  const hideNavbarRoutes = ["/noise", "/water", "/seher"];
  const hideOnPatterns = ["/noise/", "/water/"]; // these cover dynamic city routes
  const showMainNavbar =
    !hideNavbarRoutes.includes(pathname) &&
    !hideOnPatterns.some((pattern) => pathname.startsWith(pattern));

  return (
    <>
      {showMainNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<LiveData />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/predictive" element={<PredictiveAnalysis />} />
        <Route path="/powerBi" element={<AirPollutionDashboard/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/seher" element={<SeherSuchna />} />
        <Route path="/noise" element={<NoisePollution />} />
        <Route path="/water" element={<WaterPollution />} />
        {/* Detail Routes */}
        <Route path="/noise/:city" element={<CityDetail />} />
        <Route path="/water/:city" element={<WaterPollutionDetail />} />
      </Routes>
    </>
  );
}

export default App;

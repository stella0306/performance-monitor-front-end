import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./page/Home/Home.js";
import GetCpuPercentPage from "./page/cpu/GetCpuPercentPage/GetCpuPercentPage.js";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cpu_percent" element={<GetCpuPercentPage />} />
    </Routes>
  );
}

export default App;

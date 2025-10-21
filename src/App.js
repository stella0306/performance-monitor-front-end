import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./page/Home/Home.js";
import GetCpuPercentPage from "./page/cpu/GetCpuInfoPage.js";
import GetMemoryInfoPage from './page/memory/GetMemoryInfoPage.js';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cpu_info" element={<GetCpuPercentPage />} />
        <Route path="/memory_info" element={<GetMemoryInfoPage />} />
    </Routes>
  );
}

export default App;

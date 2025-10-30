import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./page/home/Home.js";
import GetCPUInfoPage from './page/cpu/GetCpuInfoPage.js';
import GetMemoryInfoPage from './page/memory/GetMemoryInfoPage.js';
import GetNetworkInfoPage from './page/network/GetNetworkInfoPage.js';
import GetDiskInfoPage from './page/disk/GetDiskInfoPage.js';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cpu_info" element={<GetCPUInfoPage />} />
        <Route path="/memory_info" element={<GetMemoryInfoPage />} />
        <Route path="/network_info" element={<GetNetworkInfoPage />} />
        <Route path="/disk_info" element={<GetDiskInfoPage />} />

    </Routes>
  );
}

export default App;

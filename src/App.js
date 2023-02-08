import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard.js'
import PvtComponent from './component/PvtComponent.js';
//import SuperSidebars from './Navfram/SuperSidebars.js';
import Login from './component/Login.js';
//import Topbars from './Navfram/Topbars';
//import './src/Navfram/Test.css'
import './App.css';
import ViewEmployee from './component/employee/ViewEmployee.js';
//import LockEmployee from './component/employee/LockEmployee.js.js';
import EditEmployee from './component/employee/EditEmployee.js';
import AdddEmployee from './component/employee/AdddEmployee.js';
import MonthReport from './component/employee/MonthReport.js';
import EmployeeReport from './component/employee/EmployeeReport.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <SuperSidebars /> */}
       {/* <Topbars /> */}
      <Routes>
      
      <Route element={<PvtComponent />}>
        
      <Route path="/" element={<Dashboard />}  />
      <Route path="/logout" element={<h1>Logout User</h1>} />
      <Route path="/viewemployee" element={<ViewEmployee />} />
      <Route path="/employee/editemployee/:id" element={<EditEmployee />} />
      <Route path="/employee/monthreport" element={<MonthReport />} />
      <Route path="/employee/EmployeeReport" element={<EmployeeReport />} />
      {/* <Route path="/employee/adddemployee" element={<AdddEmployee />} /> */}
      </Route>

      
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

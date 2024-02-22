
import React from "react";
import './admin.css'
import Sidebar from "../../components/sidebar/sidebar";
import { Routes,Route } from "react-router-dom";
import Addproduct from "../../components/Addproduct/addproduct";
import Listproduct from "../../components/Listproduct/listproduct";

let Admin=()=>{
  return(
  <div className="admin">
    <Sidebar />
    <Routes>
      <Route path="/addproduct" element={<Addproduct />} />
      <Route path="/listproduct" element={<Listproduct />} />
    </Routes>
  </div>
  )
}

export default Admin  
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/Home";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/restaurant/:id/update" element={<RestaurantDetailPage/>}/>
          <Route path="/restaurant/:id" element={<UpdatePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
}

export default App;
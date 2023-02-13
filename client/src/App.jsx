import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import Home from "./routes/Home";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/restaurant/:id/update" element={<RestaurantDetailPage/>}/>
              <Route path="/restaurant/:id" element={<UpdatePage/>}/>
            </Routes>
          </BrowserRouter>
        </div>
    </RestaurantsContextProvider>
)}

export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"  //Switch has been replaced by Routes(more declarative and flexible approach to routing)
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import Home from "./routes/Home";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
          <BrowserRouter>
            <Routes> {/* this tells React to stop looking if it finds a matching route */}
              {/* If you are using React Router V6, else use component={Home}*/}
              <Route path="/restaurants/:id/update" element={<UpdatePage/>}/>
              <Route path="/restaurants/:id" element={<RestaurantDetailPage/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="*" element={<p>Not Found or you do not have permission</p>} />
            </Routes>
          </BrowserRouter>
        </div>
    </RestaurantsContextProvider>
)}

export default App;
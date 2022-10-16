import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import privateRoutes from "./routes/private-routes";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [routes, setRoutes] = useState(privateRoutes)
  return (
    <div className="App">
      <Navbar />
        <div className="p-5">
          <Routes>
            {routes.map((route) => {
              return (
                <>
                  <Route
                    path={route.path}
                    key={route.name}
                    element={route.component}
                  />
                </>
              );
            })}
          </Routes>
        </div>
    </div>
  );
}

export default App;

import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import privateRoutes from "./routes/private-routes";
import Navbar from "./components/navbar/Navbar";

export const AppContext = createContext();

function App() {
  const [routes, setRoutes] = useState(privateRoutes);
  const [username, setUsername] = useState("cedlabrador");
  return (
    <div className="App">
      <AppContext.Provider value={{ username }}>
        <BrowserRouter>
          <Navbar />
          <div className="p-4">
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
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { RootLayouts } from "./components/layouts/RootLayouts";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Error } from "./components/pages/Error";
import Service from "./components/pages/Service";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service/>} />
          <Route path="*" element={<Error />} />
        </Route>
        
      </Routes>
    </>
  );
}

export default App;

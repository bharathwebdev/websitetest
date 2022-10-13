import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
=======
import Form from "./component/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

>>>>>>> 67405dc5ae3eed6701c9778d1907b0aba6282c67
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
    <App />
=======
      <Routes>
        <Route path="/"  element={<App />} />
        <Route path="form" element={<Form/>} />
      </Routes>
>>>>>>> 67405dc5ae3eed6701c9778d1907b0aba6282c67
    </BrowserRouter>
  </React.StrictMode>
);

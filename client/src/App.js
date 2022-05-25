import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CreateRequestPage from "./pages/CreateRequestPage";
import SignInPage from "./pages/SignInPage";
import BackendTestPage from "./pages/BackendTestPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create-request" element={<CreateRequestPage />} />
        <Route path="/backend-test" element={<BackendTestPage />} />
      </Routes>
    </div>
  );
}

export default App;

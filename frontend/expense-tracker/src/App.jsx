import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expenses from "./pages/Dashboard/Expenses";
import Settings from "./pages/Dashboard/Settings";
import UserProvider from "./context/UserContext";
import {Toaster} from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login"  element={<Login/>} />
              <Route path="/signup"  element={<SignUp/>} />
              <Route path="/dashboard"  element={<ProtectedRoute><Home/></ProtectedRoute>} />
              <Route path="/income"  element={<ProtectedRoute><Income/></ProtectedRoute>} />
              <Route path="/expense"  element={<ProtectedRoute><Expenses/></ProtectedRoute>} />
              <Route path="/settings"  element={<ProtectedRoute><Settings/></ProtectedRoute>} />
            </Routes> 
          </Router>
        </div>
        <Toaster 
          toastOptions={{
            className:" ",
            style: {
              fontSize: '13px'
            },
          }}
        />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
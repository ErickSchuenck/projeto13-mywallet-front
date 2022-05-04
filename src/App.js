import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import MainScreen from './MainScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/signUp' element={<RegisterScreen />} />
        <Route path='/main' element={<MainScreen />} />
        <Route path='/profit' element={<RegisterScreen />} />
        <Route path='/liability' element={<RegisterScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

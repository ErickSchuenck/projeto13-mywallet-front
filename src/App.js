import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import MainScreen from './MainScreen'
import EntradaScreen from './EntradaScreen'
import SaidaScreen from './SaidaScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/signUp' element={<RegisterScreen />} />
        <Route path='/main' element={<MainScreen />} />
        <Route path='/entrada' element={<EntradaScreen />} />
        <Route path='/saida' element={<SaidaScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

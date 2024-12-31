import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/shared/header/Header.component';
import Footer from './components/shared/footer/Footer.component';
import HomePage from './pages/homePage/HomePage.component';
import AddEmployPage from './pages/AddEmployPage/AddEmployPage.component';
import UpdateEmployPage from './pages/UpdateEmployPage/UpdateEmployPage.component';
import ViewEmployPage from './pages/ViewEmployPage/ViewEmployPage.component';
//import environments from './environments/environments';

// const API_ROOT_URL = environments.API_ROOT_URL;
export const API_ROOT_URL = "/api/v1/employees";


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path={API_ROOT_URL} element={<HomePage />} />
          <Route path={API_ROOT_URL + "/addemployee"} element={<AddEmployPage />}></Route>
          <Route path={API_ROOT_URL + "/updateemployee/:id"} element={<UpdateEmployPage />}></Route>
          <Route path={`${API_ROOT_URL}/viewemployee/:id`} element={<ViewEmployPage />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

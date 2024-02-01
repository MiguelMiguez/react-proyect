import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MacPage from './components/MacPage/MacPage';
import NavBar from './components/NavBar/NavBar';
import PhonesPage from './components/PhonesPage/PhonesPage';
import ContainerPs from './components/ContainerPs/ContainerPs';
import ContainerCart from './components/ContainerCart/ContainerCart';
import ContainerFooter from './components/ContainerFooter/ContainerFooter';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { MyProvider } from './components/MyContext/MyContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyProvider>
          <AppContent />
        </MyProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

function AppContent() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<ContainerPs />} />
        <Route path='/mac' element={<MacPage />} />
        <Route path='/phones' element={<PhonesPage />} />
        <Route path='/cart' element={<ContainerCart />} />
        <Route path='/item-detail' element={<ItemDetail />} />
        <Route path='*' element={<ContainerPs />} />
      </Routes>
      <ContainerFooter />
    </>
  );
}

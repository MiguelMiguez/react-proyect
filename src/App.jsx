import { useState } from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import MacPage from './components/MacPage/MacPage';
import NavBar from './components/NavBar/NavBar';
import PhonesPage from './components/PhonesPage/PhonesPage';
import ContainerPs from './components/ContainerPs/ContainerPs';
import Cart from './components/Cart/Cart';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ContainerPs/>}/>
            <Route path='/mac' element={<MacPage/>}/>
            <Route path='/phones' element={<PhonesPage/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<ContainerPs/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

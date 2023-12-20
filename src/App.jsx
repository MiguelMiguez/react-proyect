import { useState } from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import PrincipalScreen from './components/PrincipalScreen/PrincipalScreen';
import SelectProducts from './components/SelectProducts/SelectProducts';
import MacPage from './components/MacPage/MacPage';
import NavBar from './components/NavBar/NavBar';
import PhonesPage from './components/PhonesPage/PhonesPage';





function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<PrincipalScreen/>}/>
            <Route path='/mac' element={<MacPage/>}/>
            <Route path='/phones' element={<PhonesPage/>}/>
            <Route path='*' element={<PrincipalScreen/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

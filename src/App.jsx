import { useState } from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import PrincipalScreen from './components/PrincipalScreen/PrincipalScreen';
import SelectProducts from './components/SelectProducts/SelectProducts';
import MacPage from './components/MacPage/MacPage';





function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/Home' element={<PrincipalScreen/>}/>
            <Route path='/Mac' element={<MacPage/>}/>
        </Routes>
      </BrowserRouter>
        <PrincipalScreen/>
        <SelectProducts/>
    </div>
  )
}

export default App

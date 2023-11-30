import { useState } from 'react';
import PrincipalScreen from './components/PrincipalScreen/PrincipalScreen';
import SelectProducts from './components/SelectProducts/SelectProducts';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <PrincipalScreen/>
        <SelectProducts/>
    </div>
  )
}

export default App

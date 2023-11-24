import { useState } from 'react';
import PrincipalScreen from './components/PrincipalScreen/PrincipalScreen';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <PrincipalScreen/>
    </div>
  )
}

export default App

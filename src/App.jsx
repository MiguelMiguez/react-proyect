import { useState } from 'react';
import PrincipalScreen from './components/PrincipalScreen/PrincipalScreen';
import ProductCard from './components/ProductCard/ProductCard';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <PrincipalScreen/>
        <ProductCard/>
    </div>
  )
}

export default App

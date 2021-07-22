import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
function App() {
  const [name, setName] = useState('Jeff')
  const [age, setAge] = useState(20)
  const [colors, setColors] = useState(['red', 'blue', 'green', 'yellow'])

  const number = 5
  return (
    <main>
      <Header color={colors}/>
      <Footer userName={name} age={age}/>
    </main>
  );
}

export default App;

import { useState } from "react";
import Counter from "./Counter";
function App(){
  let [fruit, setFruit] = useState("Apple");
  const handlefruit = () => {
    setFruit("Banana");
  }
  return (
    <div>
      <h1>My React App</h1>
      <p>My favorite fruit is: {fruit}</p>
      <button onClick={handlefruit}>Change Fruit</button>
      <h1><Counter /></h1>
    </div>
  )
  
  
}
export default App;
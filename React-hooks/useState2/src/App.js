import { useState } from "react";

const App = () => {
  const [contar, setContar] = useState(1)
  const [items, setItems] = useState(['item 1'])

  function handleClick() {
    setContar((contar) => {
      setItems((items) => [...items, `item ${contar + 1}`])
      return contar + 1;
    })
  }

  return (
    <div>
      {items.map(item => <li key={item}>{item}</li>)}
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default App;

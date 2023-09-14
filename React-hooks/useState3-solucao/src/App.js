import { useState } from "react";
import Produto from "./Produto";

const App = () => {
  const [dados, setDados] = useState()
  const [carregando, setCarregando] = useState(null)

  async function handleClick(event) {
    setCarregando(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`).then()
    const json = await response.json()
    setDados(json)
    setCarregando(false)
  }

  return (
    <div>
      <button style={{ margin: '.5rem'}} onClick={handleClick}>Notebook</button>
      <button style={{ margin: '.5rem'}} onClick={handleClick}>Smartphone</button>
      <button style={{ margin: '.5rem'}} onClick={handleClick}>Tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados}/>}
    </div>
  )
}
export default App;

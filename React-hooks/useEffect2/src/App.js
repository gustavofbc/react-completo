// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import { useState, useEffect } from 'react'
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    handleStorage()
  }, [])

  async function handleStorage() {
    const storage = localStorage.getItem('produto')
    if(storage) {
      await fetch('https://ranekapi.origamid.dev/json/api/produto/'+ storage)
        .then(response => response.json())
        .then(data => setDados(data));
    }
  }

  async function handleClick(event) {
    localStorage.setItem('produto', event.target.innerText)

    await fetch('https://ranekapi.origamid.dev/json/api/produto/'+ event.target.innerText)
      .then(response => response.json())
      .then(data => setDados(data));
  }

  return (
    <div>
      <h1>Preferência: {dados && dados.nome}</h1>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>smartphone</button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>notebook</button>
      {dados && <Produto dados={dados}/>}
    </div>
  )
}

export default App
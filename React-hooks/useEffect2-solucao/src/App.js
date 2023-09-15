// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

import { useState, useEffect } from 'react'
import Produto from './Produto';

const App = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')
    if(produtoLocal !== null) {
      setProduto(produtoLocal)
    }
  }, [])

  useEffect(() => {
    if(produto !== null ) {
      window.localStorage.setItem('produto', produto)
    }
  }, [produto])

  async function handleClick({target}) {
    // localStorage.setItem('produto', target.innerText)

    // await fetch('https://ranekapi.origamid.dev/json/api/produto/'+ target.innerText)
    //   .then(response => response.json())
    //   .then(data => setProduto(data));
    setProduto(target.innerText)
  }

  return (
    <div>
      <h1>Preferência: {produto && produto}</h1>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>smartphone</button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>notebook</button>
      {produto && <Produto produto={produto}/>}
    </div>
  )
}

export default App
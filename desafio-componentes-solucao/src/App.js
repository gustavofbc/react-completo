// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado

import Header from './Header/Header';
import Home from './Home/Home';
import Produtos from './Produtos/Produtos';

// Dica: const { pathname } = window.location; (puxa o caminho do URL)

// const { pathname } = window.location;

const App = () => {
  let Pagina;
  const { pathname } = window.location;
  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <div>
      <Header></Header>
      <Pagina />
    </div>
  );
};

export default App;

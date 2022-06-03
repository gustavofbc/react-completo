// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado

import Header from './Header/Header';
import Home from './Home/Home';
import Produtos from './Produtos/Produtos';

// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const { pathname } = window.location;
function result() {
  if (pathname == '/produtos') {
    return <Produtos />;
  } else {
    return <Home />;
  }
}

const App = () => {
  return (
    <div>
      <Header></Header>
      {result()}
    </div>
  );
};

export default App;

import { useState } from "react";

const App = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleClick(product) {
    setLoading(true);
    let response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto/" + product
    ).then((response) => response.json());
    
    setProduct(response);
    setLoading(false);
  }

  console.log(product)
  const objetoString = JSON.stringify(product);
  return (
    <>
      <div>
        <button onClick={() => handleClick("tablet")}>tablet</button>
        <button onClick={() => handleClick("smartphone")}>smartphone</button>
        <button onClick={() => handleClick("notebook")}>notebook</button>
      </div>
      <div>
        {loading && <p>Caregando...</p>}
        {!loading && product !== null && <p>{objetoString}</p>}
      </div>
    </>
  );
};

export default App;

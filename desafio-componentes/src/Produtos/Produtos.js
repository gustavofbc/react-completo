import React from 'react';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return (
    <>
      <h2 style={{ color: 'green' }}>Produtos</h2>
      {produtos.map((item) => (
        <div
          key={item.nome}
          style={{
            border: '1px solid black',
            margin: '1rem 0',
            padding: '1rem',
          }}
        >
          <p>{item.nome}</p>
          <ul>
            {item.propriedades.map((prop) => (
              <li key={prop}>{prop}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Produtos;

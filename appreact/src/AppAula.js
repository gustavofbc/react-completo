const titulo = <h1>Este é um título</h1>;

const AppAula = () => {
  const random = Math.random();
  const ativo = false;

  function mostrarNome(sobrenome) {
    return 'Gustavo ' + sobrenome;
  }

  const carro = {
    marca: 'Ford',
    rodas: 4,
  };

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
  };

  return (
    <>
      {titulo}
      <p>
        {true ? 'adad' : 'adassadas'} - {10}
        {mostrarNome('Felipe')}
      </p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p style={estiloP}>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <p className={ativo ? 'ativo' : 'inativo'}>{(random * 1000) / 50}</p>
    </>
  );
};

export default AppAula;

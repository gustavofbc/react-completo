const App = () => {
  // function handleClick(event) {
  //   console.log(event.target);
  // }

  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);
  return (
    <div style={{ height: '200vh' }}>
      <button onClick={(event) => alert(event.target.innerText)}>
        Compre violão
      </button>
    </div>
  );
};

export default App;

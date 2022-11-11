import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className='App-title'>
            Lei de Ohm
          </h1>
          <div className="App-grade">
            <div className="App-description-box">
              <a className="App-description-title">
                Descricao
              </a>
              <a className="App-description">
                A lei de Ohm afirma que a resistência elétrica é determinada pela razão entre o potencial elétrico e a corrente elétrica.
                "As leis de Ohm permitem calcularmos importantes grandezas físicas, como a tensão, corrente e a resistência elétrica dos mais diversos elementos presentes em um circuito. No entanto, essas leis só podem ser aplicadas a resistências ôhmicas, isto é, corpos cujas resistências tenham módulo constante."
              </a>
            </div>
            <img className="App-image" src="test.png" alt="Circuito-resistivo"></img>
          </div>
          <div className="App-grade-bottom">
            <Button className="App-button" variant="contained" href="/experimento">
              Realizar Experimento
            </Button>
          </div>
      </header>
    </div>
  );
}

export default App;

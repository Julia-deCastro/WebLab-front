import './Apresentation.css';
import Button from '@mui/material/Button';

function Apresentation() {
  return (
    <div className="Apresentation">
      <header className="Apresentation-header">
        <h1 className='Apresentation-title'>
          Lei de Ohm
        </h1>
        <div className="Apresentation-grade">
          <div className="Apresentation-description-box">
            <a className="Apresentation-description-title">
              Descrição
            </a>
            <a className="Apresentation-description">
              A lei de Ohm afirma que a resistência elétrica é determinada pela razão entre o potencial elétrico e a corrente elétrica.
              "As leis de Ohm permitem calcularmos importantes grandezas físicas, como a tensão, corrente e a resistência elétrica dos mais diversos elementos presentes em um circuito. No entanto, essas leis só podem ser aplicadas a resistências ôhmicas, isto é, corpos cujas resistências tenham módulo constante."
            </a>
          </div>
          <img className="Apresentation-image" src="test.png" alt="Circuito-resistivo"></img>
        </div>
        <div className="Apresentation-grade-bottom">
          <Button className="Apresentation-button" variant="contained" href="/experimento">
            Realizar Experimento
          </Button>
        </div>
      </header>
    </div>
  );
}

export default Apresentation;

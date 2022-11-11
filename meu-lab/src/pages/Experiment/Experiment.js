import './Experiment.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chart from 'chart.js/auto';


function Experiment() {
<>
    // <canvas class="line-chart"></canvas>
    //     var ctx = document.getElementByClassName("line-chart")

    //     var chartGraph = new Chart(ctx, {
    //         type: "line"
    //     })
</>
  return (
    <div className="Experiment">
          <h1 className='Experiment-title'>
            Lei de Ohm
          </h1>
          <div className="Experiment-datas">
          <div className="Experiment-datas-inputs">
                <TextField
                id="outlined-number"
                label="Valor X min"
                type="number"
                helperText="(Maximo aceitavel 5V)"
                InputLabelProps={{
                    shrink: true,
                }}/>
            </div>
           <div className="Experiment-datas-inputs">
                <TextField
                id="outlined-number"
                label="Valor X max"
                type="number"
                helperText="(Maximo aceitavel 10V)"
                InputLabelProps={{
                    shrink: true,
                }}/>
            </div>
            <div className="Experiment-datas-inputs">
                <TextField
                id="outlined-number"
                label="Taxa de medicao"
                type="number"
                helperText="(Maximo aceitavel 100/s)"
                InputLabelProps={{
                    shrink: true,
                }}/>
            </div>
            <div className="Experiment-datas-inputs">
                <TextField
                id="outlined-number"
                label="Valor Constante"
                type="number"
                helperText="(Maximo aceitavel x)"
                InputLabelProps={{
                    shrink: true,
                }}/>
            </div>
            <div className="Experiment-datas-inputs">
                <Button className="Experiment-button-start" variant="contained" color="success">
                    Start
                </Button>
                <Button className="Experiment-button-stop" variant="contained" color="error">
                    Stop
                </Button>
            </div>
                {/* <chartGraph></chartGraph> */}
            


            
          </div>
    </div>
  );
}

export default Experiment;

import './Experiment.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LineChart from '../../components/LineChart';
import { UserData } from '../../utils/Datas'
import { useState } from 'react';

function Experiment() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: "Corrente x Tensão",
            data: UserData.map((data) => data.userGain),
            backgroundColor: "black",
            borderColor: "balck"
        }]
    })
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
                        helperText="(Máximo aceitavel 5V)"
                        InputLabelProps={{
                            shrink: true,
                        }} />
                </div>
                <div className="Experiment-datas-inputs">
                    <TextField
                        id="outlined-number"
                        label="Valor X max"
                        type="number"
                        helperText="(Máximo aceitavel 10V)"
                        InputLabelProps={{
                            shrink: true,
                        }} />
                </div>
                <div className="Experiment-datas-inputs">
                    <TextField
                        id="outlined-number"
                        label="Taxa de medição"
                        type="number"
                        helperText="(Máximo aceitavel 100/s)"
                        InputLabelProps={{
                            shrink: true,
                        }} />
                </div>
                <div className="Experiment-datas-inputs">
                    <TextField
                        id="outlined-number"
                        label="Valor Constante"
                        type="number"
                        helperText="(Máximo aceitavel x)"
                        InputLabelProps={{
                            shrink: true,
                        }} />
                </div>
            </div>
            <div className="Experiment-datas-inputs">
                <Button className="Experiment-button-start" variant="contained" color="success">
                    Start
                </Button>
                <Button className="Experiment-button-stop" variant="contained" color="error">
                    Stop
                </Button>
            </div>
            <div className="Experiment-visual-datas">
                <div className="Experiment-video">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/_rMZt292mJc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                    <div className="Experiment-chart">
                        <LineChart chartData={userData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiment;

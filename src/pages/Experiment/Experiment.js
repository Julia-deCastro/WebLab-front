import './Experiment.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LineChart from '../../components/LineChart';
import { UserData } from '../../utils/Datas'
import { useEffect, useState } from 'react';
import TableCell from '../../components/Table/TableCell';
import io from 'socket.io-client';

const socket = io('http://localhost:8080')
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'));

function Experiment() {

    const [xMax, setXMax] = useState('');
    const [xMin, setXMin] = useState('');
    const [taxa, setTaxa] = useState('');
    const [constante, setConstante] = useState('');
    const [start, setStart] = useState(false);


    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.y),
        datasets: [{
            label: "Corrente x Tensão",
            data: UserData.map((data) => data.x),
            backgroundColor: "black",
            borderColor: "balck"
        }]
    });

    const ExperimentsData = [
        {
            c: "1",
            i: start,
            x1: xMax,
            x2: xMin,
            t: taxa,
            ct: constante,
        }
    ]
    let datasJSON = JSON.stringify(ExperimentsData);
    console.log(datasJSON);

    useEffect(() => {
        socket.emit('message', datasJSON)
    }, [datasJSON])

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
                        helperText="(Máximo aceitável 5V)"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setXMin(e.target.value)} />
                </div>
                <div className="Experiment-datas-inputs">
                    <TextField
                        id="outlined-number"
                        label="Valor X max"
                        type="number"
                        helperText="(Máximo aceitável 10V)"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setXMax(e.target.value)} />
                </div>
                <div className="Experiment-datas-inputs">
                    <TextField
                        id="outlined-number"
                        label="Taxa de medição"
                        type="number"
                        helperText="(Máximo aceitável 100/s)"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setTaxa(e.target.value)} />
                </div>
                <div className="Experiment-datas-inputs">
                    <TextField
                        id="outlined-number"
                        label="Valor Constante"
                        type="number"
                        helperText="(Máximo aceitável x)"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setConstante(e.target.value)} />
                </div>
            </div>
            <div className="Experiment-datas-inputs">
                <Button onClick={() => setStart(true)} className="Experiment-button-start" variant="contained" color="success">
                    Start
                </Button>
                <Button onClick={() => setStart(false)} className="Experiment-button-stop" variant="contained" color="error">
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
                        allowfullscreen="true">
                    </iframe>
                    <div className="Experiment-chart">
                        <LineChart chartData={userData} />
                    </div>
                </div>
            </div>
            <div className="Experiment-table">
                <div className="Experiment-table-title">
                    <div className="Experiment-table-indices">
                        <p>Y</p>
                    </div>
                    <div className="Experiment-table-indices">
                        <p>X</p>
                    </div>
                </div>
                {UserData.map((element) => {
                    return (
                        <TableCell data={element} />
                    )
                })}
            </div>
        </div>
    );
}

export default Experiment;

import './Experiment.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LineChart from '../../components/LineChart';
import { useEffect, useState } from 'react';
import TableCell from '../../components/Table/TableCell';
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

function Experiment() {

    socket.on('connect', () =>
        console.log('[IO] Connect => A new connection has been established'),
    );

    const [xMax, setXMax] = useState('');
    const [xMin, setXMin] = useState('');
    const [taxa, setTaxa] = useState('');
    const [constante, setConstante] = useState('');
    const [start, setStart] = useState(false);
    const [serverDatas, setServerDatas] = useState([]);
    const [chartDatas, setChartDatas] = useState({
        labels: serverDatas.map((data) => data.y),
        datasets: [{
            label: "Corrente x Tensão",
            data: serverDatas.map((data) => data.x),
            backgroundColor: "black",
            borderColor: "balck"
        }]
    });

    useEffect(() => {
        const userData = {
            labels: serverDatas.map((data) => '1'),
            datasets: [{
                label: "Corrente x Tensão",
                data: serverDatas.map((data) => data),
                backgroundColor: "black",
                borderColor: "balck"
            }]
        };
        setChartDatas(userData);
    }, [serverDatas]);

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

    const teste =
    {
        id: "1",
        x: "30",
        y: "50"
    }
    let teste1 = JSON.stringify(teste);
    function handleTest() {
        socket.emit('message', teste1)
    }

    useEffect(() => {
        const handleNewDatas = newdatas => {
            if (newdatas !== "\r\n" && newdatas !== "unk" && newdatas !== "\r\n1\r\n")
                setServerDatas((serverDatas) => [...serverDatas, newdatas])
        }
        socket?.on('response', handleNewDatas)
        return () => socket?.off('response', handleNewDatas)
    }, []);

    console.log(serverDatas);

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
                <Button onClick={() => handleTest()} className="Experiment-button-stop" variant="contained">
                    Test
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
                        <LineChart chartData={chartDatas} />
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
                {serverDatas.map((element) => {
                    return (
                        <TableCell data={element} />
                    )
                })}
            </div>
        </div>
    );
}

export default Experiment;

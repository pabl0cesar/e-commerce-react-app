import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    seeMore: {
      marginTop: theme.spacing(3),
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    formControl: {
      margin: theme.spacing(0, 0, 2),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  

export default function ModalBody(props) { 
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    var selectedRow = JSON.parse(JSON.stringify(props.row));

    const [agent, setAgent] = React.useState('');

    const handleChange = (event) => {
      setAgent(event.target.value);
    };
  
    return (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Detalle de pedido</h2>
      <p id="simple-modal-description">
        {'Número de pedido: ' + selectedRow.id}
      </p>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Agente</InputLabel>
        <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={agent}
            onChange={handleChange}
            label="Agente">
          <MenuItem value={'fulanoId'}>Fulano</MenuItem>
          <MenuItem value={'menganoId'}>Mengano</MenuItem>
          <MenuItem value={'funganoId'}>Fungano</MenuItem>
        </Select>
      </FormControl>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>Confirmar</Button>
        <Button>Rechazar</Button>
        <Button onClick={() => props.closeModal()}>Salir</Button>
      </ButtonGroup>
    </div>
  );

}
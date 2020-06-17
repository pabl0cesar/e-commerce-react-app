import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import OrderModal from './OrderModal';

function createData(id, date, name, shipTo, paymentMethod, amount, status) {
  return { id, date, name, shipTo, paymentMethod, amount, status };
}

const rows = [
  createData(1, '16 Jun, 2020', 'Johann Sebastian Bach', 'Dallas, TX', 'VISA ⠀•••• 3719', 312.44, 'Pending'),
  createData(2, '16 Jun, 2020', 'Frédéric Chopin', 'London, UK', 'VISA ⠀•••• 2574', 866.99, 'Waiting'),
  createData(3, '16 Jun, 2020', 'Nikolo Paganini', 'Boston, MA', 'MC ⠀•••• 1253', 100.81, 'Done'),
  createData(4, '16 Jun, 2020', 'Michael Jackson', 'Buenos Aires, AR', 'AMEX ⠀•••• 2000', 654.39, 'Done'),
  createData(5, '16 Jun, 2020', 'Ludwig van Beethoven', 'Albany, NY', 'VISA ⠀•••• 5919', 212.79, 'Done'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  }
}));

var selectedRow = rows[0];

export default function Orders() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const openModal = (row) => {
    selectedRow = JSON.parse(JSON.stringify(row));
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <OrderModal open={open} row={selectedRow} closeModal={closeModal}/>

      <Title>Recent orders</Title>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Origin</TableCell>
            <TableCell>Payment method</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow onClick={() => openModal(row)} key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more
        </Link>
      </div>
    </React.Fragment>
  );
}
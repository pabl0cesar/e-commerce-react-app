import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import OrderModalBody from './OrderModalBody';

export default function OrderModal(props) {
    return (
        <Modal
        open={props.open}
        onClose={props.closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}>
            <OrderModalBody row={props.row} closeModal={props.closeModal}/>
        </Modal>
    );
}
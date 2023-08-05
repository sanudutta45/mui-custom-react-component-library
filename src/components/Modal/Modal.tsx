import React, { FC } from 'react';
import { Modal as MuiModal } from '@mui/material';
import { ModalProps } from './Modal.types';

/** Custom Modal */
const Modal: FC<ModalProps> = ({ open = false, onClose, children }) => {
    return (
        <MuiModal open={open} onClose={onClose}>
            {children}
        </MuiModal>
    );
};

export default Modal;

import React, { FC } from 'react';
import { Modal as MuiModal } from '@mui/material';
import { ModalProps } from './Modal.types';

const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
    return (
        <MuiModal open={open} onClose={onClose}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                {children}
            </div>
        </MuiModal>
    );
};

export default Modal;

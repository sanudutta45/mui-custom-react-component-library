import React, { FC } from 'react';
import { Snackbar as MuiSnackbar, SnackbarContent, Alert } from '@mui/material';
import { CustomSnackbarProps } from './Snackbar.types';

const Snackbar: FC<CustomSnackbarProps> = ({ message, variant, open, onClose, ...rest }) => {
    return (
        <MuiSnackbar open={open} {...rest}>
            <Alert severity={variant}>{message}</Alert>
        </MuiSnackbar>
    );
};

export default Snackbar;

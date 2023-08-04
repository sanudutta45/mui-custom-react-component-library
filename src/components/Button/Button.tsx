import React, { FC, CSSProperties } from 'react';
import { Button as MuiButton } from '@mui/material';
import { CustomButtonProps } from './Button.types';

/** Custom Button on top of MUI Button Component */
const Button: FC<CustomButtonProps> = ({ color, size, ...rest }) => {
    const customStyles: CSSProperties = {
        backgroundColor:
            color === 'primary' ? '#007bff' : color === 'secondary' ? '#dc3545' : '#28a745',
        color: '#fff',
        fontSize: size === 'small' ? '12px' : size === 'large' ? '18px' : '14px',
        fontWeight: 'bold',
        borderRadius: '5px',
        padding: '10px 15px',
        cursor: 'pointer',
    };

    return <MuiButton style={customStyles} {...rest} />;
};

export default Button;
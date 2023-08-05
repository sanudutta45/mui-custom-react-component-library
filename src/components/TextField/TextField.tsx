import React, { FC } from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { TextFieldProps } from './TextField.types';

const TextField: FC<TextFieldProps> = ({ error = false, helperText, ...rest }) => {
    return <MuiTextField error={error} helperText={helperText} {...rest} />;
};

export default TextField;
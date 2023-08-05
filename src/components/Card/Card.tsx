import React, { FC } from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';
import { CardProps } from './Card.types';

const Card: FC<CardProps> = ({ title, content, ...rest }) => {
    return (
        <MuiCard {...rest}>
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography>{content}</Typography>
            </CardContent>
        </MuiCard>
    );
};

export default Card;

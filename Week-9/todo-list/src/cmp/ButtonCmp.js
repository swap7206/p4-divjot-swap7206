import React from 'react'
import { Button, IconButton } from '@mui/material';


export const ButtonCmp = ({ children, disabled, color, size, sx, variant, onClick }) => {
    return (
        <div>
            <Button
                disabled={disabled}
                color={color}
                size={size}
                variant={variant}
                sx={sx}
                onClick={onClick}
            >
                {children}
            </Button>
        </div>
    )
}


export const IconButtonCmp = ({ children, disabled, aria_label, color, size, sx, variant, onClick }) => {
    return (
        <div>
            <IconButton
                disabled={disabled}
                aria-label={aria_label}
                color={color}
                size={size}
                variant={variant}
                sx={sx}
                onClick={onClick}
            >
                {children}
            </IconButton>
        </div>
    )
}

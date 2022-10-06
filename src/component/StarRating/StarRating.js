import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export default function DiscreteSlider() {
    return (
        <Box sx={{ width: 100 }}>
            <Slider defaultValue={4} step={1} marks min={0} max={5} disabled />
        </Box>
    );
}
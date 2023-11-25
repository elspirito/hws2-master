import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 300,
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    outline: '2px solid #00CC22',
                    border: '4px solid #fff',
                },
                '& .MuiSlider-thumb::before': {
                    boxShadow: 'none !important'
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

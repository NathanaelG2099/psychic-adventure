import React from 'react'
import Box from "@mui/material/Box"
import { Select } from '@mui/material'
import {MenuItem} from '@mui/material'

const Camera = ({cam1, cam2, cam3}) => {
  const [cam, setCam] = React.useState('');

  const handleChange = (event) => {
    setCam(event.target.value);
  }

  return (
    <>
        <Select
        value={cam}
        label="Camera"
        onChange={handleChange}>
          <MenuItem value={cam1}>Camera 1</MenuItem>
          <MenuItem value={cam2}>Camera 2</MenuItem>
          <MenuItem value={cam3}>Camera 3</MenuItem>
        </Select>
        
        <Box
        component="img"
        className='imgBox'
        border={0}
        borderTop={0}
        borderLeft={0}
        borderRight={0}
        borderColor="white"
        sx={{
            width: "100%",
            height: undefined,
            aspectRatio : 3/2
        }}
        alt="Video Feed."
        src={cam}/>
    </>
  )
}

export default Camera
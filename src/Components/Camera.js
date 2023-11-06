import React from 'react'
import Box from "@mui/material/Box"

const Camera = ({feed}) => {
  return (
    <>
        <Box
        component="img"
        sx={{
            width: 320,
            height:218,
            borderRadius: 1,
            bgcolor: "green"
        }}
        alt="Video Feed."
        src={feed}/>
    </>
  )
}

export default Camera
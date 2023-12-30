import {useState} from 'react'
import Box from "@mui/material/Box"
import { Select, TextField } from '@mui/material'
import {MenuItem} from '@mui/material'

const Camera = () => {
  const [cam, setCam] = useState("Cameras");
  const [height, setHeight] = useState(innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const cameras = [
    {
      value: "Blank Video Feed",
      label: "Clear"
    },
    {
      value: "https://impeccabletablemanners.files.wordpress.com/2016/05/monkey-puppet-omg-shock-gif.gif",
      label: 'Cam 1'
    },
    {
      value: "https://art.ngfiles.com/images/1442000/1442802_amni3d_3d-among-us-gifs.gif?f1601359412",
      label: 'Cam 2'
    },
    {
      value: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/SmallFullColourGIF.gif',
      label: 'Cam 3'
    }
  ]
  const handleChange = (event) => {
    setCam(event.target.value);
    setHeight(innerHeight);
    setWidth(innerWidth);
  }

  return (
    <>
      <TextField fullWidth select style={{height: '55px'}} onChange={handleChange}>
        {cameras.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {/*
        <Select
        value={cam}
        label="Camera"
        onChange={handleChange}>
          <MenuItem value={""}>Close</MenuItem>
          <MenuItem value={"https://impeccabletablemanners.files.wordpress.com/2016/05/monkey-puppet-omg-shock-gif.gif"}>Width {width}</MenuItem>
          <MenuItem value={"https://art.ngfiles.com/images/1442000/1442802_amni3d_3d-among-us-gifs.gif?f1601359412"}>Height {height}</MenuItem>
          <MenuItem value={"https://upload.wikimedia.org/wikipedia/commons/a/aa/SmallFullColourGIF.gif"}>Camera 3</MenuItem>
        </Select>
        */}

        <Box
        component="img"
        className='imgBox'
        sx={{
            width: '100%',
            height: {innerHeight} - 50,
            aspectRatio: 4/3,
            display: 'flex',
            flexGrow: 1,
            boxSizing: 'border-box'
        }}
        alt="Video Feed."
        src={cam}/>
    </>
  )
}

export default Camera
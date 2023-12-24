import {useState} from 'react'
import Box from "@mui/material/Box"
import { Select } from '@mui/material'
import {MenuItem} from '@mui/material'

const Camera = () => {
  const [cam, setCam] = useState("Cameras");
  const [height, setHeight] = useState(innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const handleChange = (event) => {
    setCam(event.target.value);
  }

  return (
    <>
        <Select
        value={cam}
        label="Camera"
        onChange={handleChange}>
          <MenuItem value={"https://impeccabletablemanners.files.wordpress.com/2016/05/monkey-puppet-omg-shock-gif.gif"}>Width {width}</MenuItem>
          <MenuItem value={"https://art.ngfiles.com/images/1442000/1442802_amni3d_3d-among-us-gifs.gif?f1601359412"}>Height {height}</MenuItem>
          <MenuItem value={"https://upload.wikimedia.org/wikipedia/commons/a/aa/SmallFullColourGIF.gif"}>Camera 3</MenuItem>
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
            width: ({width} > {height})? "undefined":"",
            height: ({width} > {height})? "100%":"undefined",
            objectFit: 'contain'
        }}
        alt="Video Feed."
        src={cam}/>
    </>
  )
}

export default Camera
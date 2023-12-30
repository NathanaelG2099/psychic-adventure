import {useState, useEffect} from 'react'
import Box from "@mui/material/Box"
import { Select, TextField } from '@mui/material'
import {MenuItem} from '@mui/material'

const Camera = () => {
  const [cam, setCam] = useState("Cameras");
  const [BoxHeight, setHeight] = useState(0);
  const aspectRatio = 4/3;


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

  useEffect(() => {
    const updateBoxHeight = () => {
      const boxWidth = window.innerWidth;
      const calculatedHeight = boxWidth / aspectRatio;
      setHeight(calculatedHeight);
    };

    updateBoxHeight();

    window.addEventListener('resize', updateBoxHeight);

    return () => {
      window.removeEventListener('resize', updateBoxHeight);
    };
  }, [aspectRatio]);

  const handleChange = (event) => {
    setCam(event.target.value);
    setHeight(innerHeight);
    setWidth(innerWidth);
  }

  return (
    <>
      <TextField fullWidth select style={{height: '24px', position: 'absolute', zIndex: 1}} onChange={handleChange}>
        {cameras.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box
        component="img"
        className='imgBox'
        sx={{
            height: BoxHeight,
            maxHeight: '100%',
            width: '100%',
            aspectRatio: 4/3,
            display: 'flex',
            flexGrow: 1,
            position: 'relative'
        }}
        alt="Video Feed."
        src={cam}/>
    </>
  )
}

export default Camera
import { Box, Button, Input } from '@mui/material';
import React, { useState } from 'react';

function submitHandler() {

}

function changeTaskHandler() {

}

function changeTimeHandler() {

}

function changeDateHandler() {

}

const Form = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [task, setTask] = useState("");



  return (


    <form onSubmit={submitHandler}>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: { xs: "60vw", md: "30vw" },
          padding: 5,
          borderRadius: "10px"
        }}>


        <Box sx={{ display: "flex", justifyConent: "center", flexDirection: "column" }}>
          <Input placeholder='Hora' type="time" required onChange={changeTimeHandler} fullWidth="true"/>
          <Input placeholder='Fecha' type="date" required onChange={changeDateHandler} fullWidth="true" />
        </Box>

        <Box>
          <Input placeholder='Tarea' type="text" required onChange={changeTaskHandler} fullWidth="true" multiline="true" />
        </Box>

        <Button variant="contained" type="submit" color="primary" sx={{marginTop:"2rem"}}>Agregar tarea</Button>
      </Box>

    </form>


  )
}

export default Form
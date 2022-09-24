import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Form.css'


const Form = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [task, setTask] = useState("");

  function submitHandler(event) {
    event.preventDefault();
  }

  function changeTaskHandler(event) {
    setTask(event.target.value);
  }

  function changeTimeHandler(event) {
    setTime(event.target.value);
  }

  function changeDateHandler(event) {
    setDate(event.target.value);
  }



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
          borderRadius: "10px",
          boxShadow: 10
        }}>


        <Box sx={{ display: "flex", justifyConent: "center", flexDirection: "column", width: "50%", margin: "auto" }}>
          <Typography variant='body1' color="white">Hora:</Typography>
          <TextField placeholder='Hora' type="time" variant="standard" required={true} onChange={changeTimeHandler} color="third" sx={{ marginBottom: 3 }} />

          <Typography variant='body1' color="white">Fecha:</Typography>
          <TextField placeholder='Fecha' type="date" variant="standard" required={true} onChange={changeDateHandler} color="third" sx={{ marginBottom: 4 }} />
        </Box>

        <Box className="input">
          <TextField
            placeholder='Tarea'
            type="text"
            required
            onChange={changeTaskHandler}
            fullWidth={true}
            multiline={true}
            minRows={2}
            maxRows={5}
            sx={{
              backgroundColor: "third.main",
              borderRadius: "15px"
            }} />
        </Box>

        <Button
          variant="contained"
          type="submit"
          color="fourth"
          disabled={time === "" || date === "" || task === ""}
          sx={{ marginTop: "2rem" }}
        >Agregar tarea</Button>
      </Box>

    </form >


  )
}

export default Form
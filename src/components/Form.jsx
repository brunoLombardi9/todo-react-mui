import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Form.css'
import { Tasks, CustomBox } from './';


const Form = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [task, setTask] = useState("");

  function submitHandler(event) {
    event.preventDefault();
  }

  function changeTaskTitleHandler(event) {
    setTaskTitle(event.target.value);
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

    <>
      <form onSubmit={submitHandler}>
        <CustomBox>


          <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" }, width: { xs: "50%", md: "auto" }, margin: "auto" }}>

            <Typography variant='body1' color="white">Tarea:</Typography>
            <TextField type="text" variant="standard" required={true} onChange={changeTaskTitleHandler} color="third" sx={{ marginBottom: 3, backgroundColor: "third.primary" }} />

            <Typography variant='body1' color="white">Hora:</Typography>
            <TextField placeholder='Hora' type="time" variant="standard" required={true} onChange={changeTimeHandler} color="third" sx={{ marginBottom: 3, backgroundColor: "third.primary" }} />

            <Typography variant='body1' color="white">Fecha:</Typography>
            <TextField placeholder='Fecha' type="date" variant="standard" required={true} onChange={changeDateHandler} color="third" sx={{ marginBottom: 4 }} />
          </Box>

          <Box className="input">
            <TextField
              placeholder='Escribir tarea...'
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
            disabled={time === "" || date === "" || taskTitle === "" || task === ""}
            sx={{ marginTop: "2rem" }}
          >Agregar tarea</Button>


        </CustomBox>


      </form >
      <Tasks />
    </>


  )
}

export default Form
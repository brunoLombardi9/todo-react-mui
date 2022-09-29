import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import './Form.css'
import { CustomBox } from './';
import { context } from './FormContext';



const Form = () => {
  const formContext = useContext(context);

  const submitHandler = formContext.submitHandler;
  const changeTaskTitleHandler = formContext.changeTaskTitleHandler;
  const changeTaskHandler = formContext.changeTaskHandler;
  const changeTimeHandler = formContext.changeTimeHandler;
  const changeDateHandler = formContext.changeDateHandler;
  const time = formContext.time;
  const date = formContext.date;
  const taskTitle = formContext.taskTitle;
  const task = formContext.task;


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

    </>

  )
}

export default Form
import React, { createContext, useState } from 'react'


export const context = createContext();

const Provider = context.Provider;

const FormContext = ({ children }) => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [taskTitle, setTaskTitle] = useState("");
    const [task, setTask] = useState("");

    const contextContent = {
        submitHandler: submitHandler,
        changeTaskTitleHandler: changeTaskTitleHandler,
        changeTaskHandler: changeTaskHandler,
        changeTimeHandler: changeTimeHandler,
        changeDateHandler: changeDateHandler,
        time: time,
        date: date,
        taskTitle: taskTitle,
        task: task
    }

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
        <Provider value={contextContent}>
            {children}
        </Provider>
    )

}

export default FormContext
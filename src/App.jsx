import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Container, Form, Theme, Tasks, TaskDetails, FormContext } from "./components"

function App() {

  return (

    <Theme>
      <Container>
      <FormContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<><Form /><Tasks /></>} />
            <Route path="/tasks/:id" element={<TaskDetails/>} />
          </Routes>
        </BrowserRouter>
        </FormContext>
      </Container>
    </Theme>

  )
}

export default App

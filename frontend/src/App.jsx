import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import SignUp from "./components/SignUp"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Sign-Up" element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App

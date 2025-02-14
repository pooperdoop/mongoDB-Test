import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Home from "./components/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Sign-Up" element={<SignUp/>}/>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App

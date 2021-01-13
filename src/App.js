import "materialize-css/dist/css/materialize.min.css"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import NavBar from "./Components/NavBar"
import CameraPage from "./Containers/CameraPage"
// import WebCam from "./Components/WebCam"
import Homepage from "./Containers/Hompage"

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/webcam" component={CameraPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </>
  )
}

export default App

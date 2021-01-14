import "materialize-css/dist/css/materialize.min.css"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import NavBar from "./Components/NavBar"
import CameraPage from "./Containers/CameraPage"
// import WebCam from "./Components/WebCam"
import Homepage from "./Containers/Hompage"
import ReportGalleryPage from "./Containers/ReportGalleryPage"
import VideoGalleryPage from "./Containers/VideoGalleryPage"

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/webcam" component={CameraPage} />
        <Route path="/videos" component={VideoGalleryPage} />
        <Route path="/reports" component={ReportGalleryPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </>
  )
}

export default App

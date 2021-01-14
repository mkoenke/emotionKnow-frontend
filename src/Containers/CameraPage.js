import React from "react"
import WebCamRecorder from "../Components/WebCam"
// import Recorder from "../Components/RecordRTC"
// import VideoRecorder from "../Components/VideoRecorder"
// import VideoJSRecord from "../Components/VideoJSRecord"

class CameraPage extends React.Component {
  render() {
    return (
      <>
        <h1>Camera Page</h1>
        <WebCamRecorder />
        {/* <VideoRecorder /> */}

        {/* <VideoJSRecord /> */}
        {/* <Recorder /> */}
      </>
    )
  }
}

export default CameraPage

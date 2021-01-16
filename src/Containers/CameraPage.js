import React from "react"
// import VideoJSRecord from "../Components/VideoJSRecord"
import RecordView from "../Components/ReactMediaRecorder"
// import Recorder from "../Components/RecordRTC"
// import VideoRecorder from "../Components/VideoRecorder"
// import WebCamRecorder from "../Components/WebCam"

class CameraPage extends React.Component {
  render() {
    return (
      <>
        <h1>Camera Page</h1>
        {/* <WebCamRecorder /> */}
        <RecordView />
        {/* <VideoRecorder /> */}

        {/* <VideoJSRecord /> */}
        {/* <Recorder /> */}
      </>
    )
  }
}

export default CameraPage

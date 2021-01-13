import React from "react"
import Webcam from "react-webcam"

class WebCam extends React.Component {
  state = {
    webcamVideo: "",
    webcamPreview: true,
    showCapture: false,
    webcamMirrored: true,
    countdown: 3,
    interval: null,
    open: true,
  }

  render() {
    const videoConstraints = {
      facingMode: "user",
      width: 1280,
      height: 720,
    }

    return (
      <>
        <Webcam
          audio={false}
          height={720}
          ref={this.webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
          style={{ marginBottom: "15px" }}
        />
        <button onClick={this.capture}>Capture photo</button>
      </>
    )
  }
}

export default WebCam

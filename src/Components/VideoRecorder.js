import React from "react"
import { ReactMediaRecorder } from "react-media-recorder"

class VideoRecorder extends React.Component {
  render() {
    return (
      <>
        <ReactMediaRecorder
          video
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div>
              <p>{status}</p>
              <button onClick={startRecording}>Start Recording</button>
              <button onClick={stopRecording}>Stop Recording</button>
              <video
                src={mediaBlobUrl}
                controls
                autoplay
                heigh="720"
                width="1280"
              />
            </div>
          )}
        />
      </>
    )
  }
}

export default VideoRecorder

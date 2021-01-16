import React from "react"
import Webcam from "react-webcam"

// const WebCamRecorder = () => {
//   const webcamRef = React.useRef(null)
//   const mediaRecorderRef = React.useRef(null)
//   const [capturing, setCapturing] = React.useState(false)
//   const [recordedChunks, setRecordedChunks] = React.useState([])

//   const handleStartCaptureClick = React.useCallback(() => {
//     setCapturing(true)
//     mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
//       mimeType: "video/webm",
//     })
//     mediaRecorderRef.current.addEventListener(
//       "dataavailable",
//       handleDataAvailable
//     )
//     mediaRecorderRef.current.start()
//   }, [webcamRef, setCapturing, mediaRecorderRef])

//   const handleDataAvailable = React.useCallback(
//     ({ data }) => {
//       if (data.size > 0) {
//         setRecordedChunks((prev) => prev.concat(data))
//       }
//     },
//     [setRecordedChunks]
//   )

//   const handleStopCaptureClick = React.useCallback(() => {
//     mediaRecorderRef.current.stop()
//     setCapturing(false)
//   }, [mediaRecorderRef, webcamRef, setCapturing])

//   const handleDownload = React.useCallback(() => {
//     if (recordedChunks.length) {
//       const blob = new Blob(recordedChunks, {
//         type: "video/webm",
//       })
//       const url = URL.createObjectURL(blob)
//       const a = document.createElement("a")
//       document.body.appendChild(a)
//       a.style = "display: none"
//       a.href = url
//       a.download = "react-webcam-stream-capture.webm"
//       a.click()
//       window.URL.revokeObjectURL(url)
//       setRecordedChunks([])
//     }
//   }, [recordedChunks])

//   return (
//     <>
//       <Webcam audio={false} ref={webcamRef} />
//       {capturing ? (
//         <button onClick={handleStopCaptureClick}>Stop Capture</button>
//       ) : (
//         <button onClick={handleStartCaptureClick}>Start Capture</button>
//       )}
//       {recordedChunks.length > 0 && (
//         <button onClick={handleDownload}>Download</button>
//       )}
//     </>
//   )
// }

class WebCamRecorder extends React.Component {
  state = {
    webcamVideo: "",
    webcamPreview: true,
    showCapture: false,
    webcamMirrored: true,
    countdown: 3,
    interval: null,
    open: true,
    ref: null,
  }

  setRef = (webcam) => {
    this.webcam = webcam
  }
  //   const webcamRef = React.useRef(null);

  //   const  capture = React.useCallback(
  //     () => {
  //       const imageSrc = webcamRef.current.getScreenshot();
  //     },
  //     [webcamRef]
  //   );

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
          ref={this.setRef}
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

// class WebCamRecorder extends React.Component {
//   state = {
//     webcamPhoto: "",
//     webcamPreview: true,
//     showCapture: false,
//     webcamMirrored: true,
//     countdown: 3,
//     interval: null,
//     open: true,
//   }

//   componentWillUnmount() {
//     clearInterval(this.state.interval)
//   }

//   setRef = (webcam) => {
//     this.webcam = webcam
//   }

//   /* captures current webcam feed and sets to state */
//   capture = () => {
//     const newCount = this.state.countdown - 1
//     if (newCount >= 0) {
//       this.setState({ countdown: newCount })
//     } else {
//       clearInterval(this.state.interval)
//       const photo = this.webcam.getScreenshot()
//       this.setState({
//         webcamPhoto: photo,
//         webcamPreview: false,
//         showCapture: true,
//         countdown: 5,
//         interval: null,
//       })
//     }
//   }

//   timer = () => {
//     const interval = setInterval(this.capture, 1000)
//     this.setState({ interval: interval })
//   }

//   /* resets state to wipe photo and show webcam feed */
//   retake = () => {
//     this.setState({
//       webcamPhoto: "",
//       webcamPreview: true,
//       showCapture: false,
//       countdown: 5,
//     })
//   }

//   /* closes capture modal and sends photo to API */
//   sendToAPI = () => {
//     this.setState({ open: false })
//     this.props.sendToAPI(this.state.webcamPhoto)
//   }

//   render() {
//     return (
//       <div className="webcam-modal">
//         <div
//           closeIcon
//           onClose={() => this.setState({ open: false })}
//           onOpen={() => this.setState({ open: true })}
//           open={this.state.open}
//           basic
//           trigger={<button color="black">Open Camera</button>}
//         >
//           <h2>Capture Emotions</h2>

//           {/* shows webcam preview and lets users take picture */}
//           {this.state.webcamPreview ? (
//             <div className="live-preview">
//               <div>
//                 <div textAlign="center">
//                   {/* countdown mode */}
//                   {this.state.interval ? (
//                     <h2 inverted textAlign="center" as="h3">
//                       Taking picture in: {this.state.countdown}
//                     </h2>
//                   ) : (
//                     <h2
//                       inverted
//                       textAlign="center"
//                       as="h3"
//                       content="Say cheese!"
//                     />
//                   )}

//                   <div>
//                     <Webcam
//                       ref={this.setRef}
//                       mirrored={this.state.webcamMirrored}
//                       screenshotFormat="image/png"
//                       screenshotQuality={1}
//                       width={640}
//                       forceScreenshotSourceSize={true}
//                       style={{ marginBottom: "15px" }}
//                     />
//                   </div>

//                   <button onClick={this.timer}>Take Photo</button>

//                   <button
//                     onClick={() =>
//                       this.setState({
//                         webcamMirrored: !this.state.webcamMirrored,
//                       })
//                     }
//                   >
//                     Mirror: {this.state.webcamMirrored ? "ON" : "OFF"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ) : null}

//           {/* lets user verify captured photo before sending to API */}
//           {this.state.showCapture ? (
//             <div className="capture-preview">
//               <div>
//                 <div textAlign="center">
//                   <img
//                     centered={true}
//                     src={this.state.webcamPhoto}
//                     alt="preview"
//                     style={{ marginBottom: "15px" }}
//                   />
//                   <button onClick={this.retake}>Retake</button>
//                   <button onClick={this.sendToAPI}>Send Photo</button>
//                 </div>
//               </div>
//             </div>
//           ) : null}
//         </div>
//       </div>
//     )
//   }
// }

export default WebCamRecorder

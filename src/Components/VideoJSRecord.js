import React from "react"
import videojs from "video.js"
import "video.js/dist/video-js.min.css"
import "videojs-record/dist/css/videojs.record.css"

function VideoJSRecord() {
  const videoJsOptions = {
    controls: true,
    bigPlayButton: false,
    width: 320,
    height: 240,
    fluid: false,
    plugins: {
      record: {
        audio: true,
        video: true,
        maxLength: 10,
        debug: true,
      },
    },
  }

  let player = videojs("myVideo", videoJsOptions, function () {
    // print version information at startup
    const msg =
      "Using video.js " +
      videojs.VERSION +
      " with videojs-record " +
      videojs.getPluginVersion("record")
    videojs.log(msg)

    console.log("videojs-record is ready!")
  })

  return (
    <>
      <h1>Video</h1>
      <video id="myVideo" playsinline class="video-js vjs-default-skin"></video>
    </>
  )
}

export default VideoJSRecord

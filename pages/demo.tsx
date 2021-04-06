import React, {useEffect, useRef} from "react";
import Page from "../layouts/Page";

const DemoPage: React.FC = (props) => {
  const playerRef = useRef<HTMLVideoElement>(null);

  const addSrcPlay = (src: string) => {
    playerRef.current!.src = src
    playerRef.current?.play()
  }

  useEffect(() => { })

  return(
    <Page>
      <div>
        <button style={{margin: 12}} onClick={(e) => {
          addSrcPlay('test_video.mp4')
        }}>Play valid video</button>
        <button onClick={(e) => {
          addSrcPlay('test_video1.mp4')
        }}>Play 404 video</button>
        <br/>
        <video ref={playerRef} id='videoItem' controls style={{width: '80%', maxWidth: '600'}}></video>
      </div>
    </Page>
  )
}

export default DemoPage;

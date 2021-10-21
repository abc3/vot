import React, { useEffect, useRef } from 'react'
import Page from '../layouts/Page'
import {Card, PageHeader} from 'antd'
import dynamic from 'next/dynamic'
import 'videojs-contrib-quality-levels'
import { createClient } from '@supabase/supabase-js'
import videojs from 'video.js'

// interface Event {
//   type?: string
//   event?: string
//   session?: string
//   ip?: string
//   browser?: string
//   device?: string
//   os?: string
//   video_id?: string
//   video_name?: string
//   video_type?: string
//   category_name?: string
//   sub_category_name?: string
//   duration?: number
//   clientWidth?: number
//   clientHeight?: number
//   src?: string
// }

const VideoPlayer = dynamic(
  // @ts-ignore
  () => import('react-video-js-player'), { ssr: false }
)

const supabase = createClient(
  "https://bwyubgrfukbthyirhnkw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDMwMjI3MiwiZXhwIjoxOTQ5ODc4MjcyfQ.HWMf1Gh5ESBzC6ld3COgfy6n6BxU_vqqMiOGhIA7i1A"
)

async function addEvent(event) {
  try {
    const { data, error } = await supabase.from('events').insert(event).single()
    if (error) {
      console.error('there was an error inserting', error)
      return null
    }
    console.log('inserted new record')
    return data
  } catch (err) {
    console.error('Unknown problem inserting to db', err)
    return null
  }
}

function votPlugin(options) {

  if (options.customClass) {
    this.addClass(options.customClass);
  }

  this.on('playing', function () {
    videojs.log('playback began!');
  });
}

const IndexPage = (props) => {

  const playerRef = useRef(null);

  useEffect(() => {
    // addEvent({ event: 'test' })
  }, [])

  const handlePlayerReady = (player) => {
    videojs.registerPlugin('votPlugin', votPlugin);
  };

  return (<Page>

    <PageHeader
      title="Player Demo"
      subTitle="awesome description"
      onBack={() => null}
    />

    <Card
      bordered={false}
      style={{ paddingTop: 24 }}
      bodyStyle={{ padding: '0 32px 40px 32px' }}
      loading={false}
    >

      <VideoPlayer
        // @ts-ignore
        bigPlayButton={true}
        controls={true}
        onReady={handlePlayerReady}
        ref={playerRef}
        src={"https://didkyjgwsjjjadhqgwqr.supabase.co/storage/v1/object/public/media/items/10/playlist.m3u8"}
        width="720"
        height="420"
      />

    </Card>
  </Page>)

}

export default IndexPage;

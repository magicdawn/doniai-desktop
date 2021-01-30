<template>
  <div class="videoWrap" id="video-box" v-if="video_url !== null">
    asda
  </div>
</template>

<script>
import Artplayer from 'artplayer'
import Hls from 'hls.js'
export default {
  name: 'LivisPlayer',
  data() {
    return {
      options: {
        poster: '../assets/th.jpg',
        volume: 0.5,
        muted: false,
        autoplay: false,
        pip: true,
        autoSize: true,
        screenshot: true,
        setting: true,
        loop: true,
        playbackRate: true,
        aspectRatio: true,
        fullscreen: true,
        fullscreenWeb: true,
        mutex: true,
        theme: '#ffad00',
        lang: 'zh-cn',
        moreVideoAttr: {
          crossOrigin: 'anonymous',
          'webkit-playsinline': true,
          playsInline: true,
        },
      },
      live_url: '',
      live_is: true,
    }
  },
  props: {
    video_url: {
      type: String,
      required: false,
    },
    is_live: {
      type: Boolean,
      required: false,
    },
  },
  watch: {
    video_url: {
      handler(n, o) {
        this.live_url = n
      },
      deep: true,
    },
    is_live: {
      handler(n, o) {
        this.live_is = n
      },
      deep: true,
    },
  },
  mounted() {
    this.live_url = this.video_url
    this.live_is = this.is_live
    this.loadHls()
  },
  methods: {
    loadHls() {
      let bindEle = { container: '#video-box' }
      let hlsOption = {
        url: this.live_url,
        isLive: this.live_is,
        customType: {
          m3u8: function(video, url) {
            let hls = new Hls()
            hls.loadSource(url)
            hls.attachMedia(video)
          },
        },
      }
      let art = new Artplayer({ ...bindEle, ...this.options, ...hlsOption })
    },
  },
}
</script>

<style scoped lang="less">
.videoWrap {
  height: 650px;
}
</style>

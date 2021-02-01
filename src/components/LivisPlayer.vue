<template>
  <div class="videoWrap" id="video-box" v-if="video_url !== null">
    视频格式暂不支持
  </div>
</template>

<script>
import { getResourceType } from '../utils/helper'
import Artplayer from 'artplayer'
import Hls from 'hls.js'
import flvjs from 'flv.js'
export default {
  name: 'LivisPlayer',
  data() {
    return {
      options: {
        poster: 'https://i.loli.net/2021/01/15/xsjTIfymPv9cKWu.jpg',
        volume: 0.5,
        muted: false,
        autoplay: true,
        pip: true,
        autoSize: true,
        screenshot: true,
        setting: true,
        loop: true,
        aspectRatio: true,
        fullscreen: true,
        fullscreenWeb: true,
        hotkey: true,
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
      player: null,
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
    this.byTypeLoad(this.video_url)
  },
  destroyed() {
    this.destoryPlayer()
  },
  methods: {
    loadHls() {
      let bindEle = { container: '#video-box' }
      let hlsOption = {
        url: this.live_url,
        isLive: this.live_is,
        playbackRate: false,
        customType: {
          m3u8: function(video, url) {
            this.player = new Hls()
            this.player.loadSource(url)
            this.player.attachMedia(video)
          },
        },
      }
      let art = new Artplayer({ ...bindEle, ...this.options, ...hlsOption })
    },

    loadFlv() {
      let bindEle = { container: '#video-box' }
      let hlsOption = {
        url: this.live_url,
        isLive: this.live_is,
        playbackRate: false,
        customType: {
          flv(video, url) {
            this.player = flvjs.createPlayer({
              type: 'flv',
              url: url,
            })
            this.player.attachMediaElement(video)
            this.player.load()
          },
        },
      }
      let art = new Artplayer({ ...bindEle, ...this.options, ...hlsOption })
    },

    loadOther() {
      let bindEle = { container: '#video-box' }
      let otherOption = {
        url: this.live_url,
        isLive: false,
        playbackRate: true,
      }
      let art = new Artplayer({ ...bindEle, ...this.options, ...otherOption })
    },

    byTypeLoad(live_url) {
      let live_type = getResourceType(live_url)
      if (live_type === 'hls') {
        this.loadHls()
      } else if (live_type === 'flv') {
        this.loadFlv()
      } else {
        this.loadOther()
      }
    },

    destoryPlayer() {
      if (this.player) {
        this.player.destory()
      }
    },
  },
}
</script>

<style scoped lang="less">
.videoWrap {
  height: 650px;
}
</style>

<template>
  <div class="videoWrap" id="video-box">
    asda
  </div>
</template>

<script>
import { getResourceType, isEmpty, isVideo } from "@/utils/helper";
import Artplayer from 'artplayer';
import Hls from "hls.js";
export default {
  name: "LivisPlayer",
  data() {
    return {
      options: {
        poster: "https://i.loli.net/2021/01/15/qoaHymLdRsFUbZM.jpg",
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
        theme: "#ffad00",
        lang: "zh-cn",
        moreVideoAttr: {
          crossOrigin: "anonymous",
          'webkit-playsinline': true,
          playsInline: true,
        }
      }
    };
  },
  props: {
    video_url: {
      type: String,
      required: false,
    },
    is_live: {
      type: Boolean,
      required: false
    }
  },
  mounted() {
    this.loadHls()
  },
  methods: {
    loadHls() {
      let bindEle = {container: '#video-box'}
      let hlsOption = {
        url: 'https://hlstct.douyucdn2.cn/dyliveflv3a/674441rwHaJrwIwg.m3u8?txSecret=914de5bf27e9409a9d10474111d7afde&txTime=6013f1ba&token=h5-douyu-0-674441-3f4662f3a0d86d7b8365c6e04ce66e22&did=10000000000000000000000000001501&origin=tct&vhost=play4',
        customType: {
          m3u8: function (video, url) {
            let hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(video);
          },
        }
      }
      let art = new Artplayer({...bindEle, ...this.options, ...hlsOption})
    }
  }
};
</script>

<style scoped lang="less">
.videoWrap {
  height: 650px;
}
</style>

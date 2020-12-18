<template>
  <div class="videoWrap">
    <ArtplayerComponent :option="options" @getInstance="getInstance" :style="{
        width: '100%',
        height: '620px',
        margin: '0 auto'
      }"/>
  </div>
</template>

<script>
import { getResourceType, isEmpty, isVideo } from "@/utils/helper";
import ArtplayerComponent from 'artplayer-vue';
const url = "https://zhw2590582.github.io/assets-cdn";
export default {
  name: "Artplayer",
  components: {
    ArtplayerComponent
  },
  data() {
    return {
      options: {
        url: url + "/video/one-more-time-one-more-chance-480p.mp4",
        title: "【新海诚动画】『秒速5センチメートル』",
        poster: url + "/image/one-more-time-one-more-chance-poster.jpg",
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
          crossOrigin: "anonymous"
        }
      }
    };
  },
  props: {
    video_url: {
      type: String,
      required: false
    },
    is_live: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    getInstance(ins) {
      console.log(ins);
    },
    deviceType() {
      // eslint-disable-next-line
      let device_tag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      if (device_tag !== null) {
        this.videoDOM.setAttribute("webkit-playsinline", true);
        this.videoDOM.setAttribute("playsinline", true);
        this.videoDOM.setAttribute("crossorigin", "");
        this.videoDOM.setAttribute("x-webkit-airplay", "allow");
        this.videoDOM.setAttribute("x5-video-player-type", "h5");
        this.videoDOM.setAttribute("x5-video-player-fullscreen", true);
      }
    },
    async initPlayer(live_url) {
      if (isEmpty(live_url)) {
        this.$buefy.snackbar.open({
          duration: 5000,
          message: "视频源加载失败",
          type: "is-danger",
          position: "is-bottom-right",
          actionText: "Msg"
        });
        return;
      }
      let live_type = await getResourceType(live_url);
      if (live_type === "hls") {
        await this.hlsResourceLoad(live_url);
      } else if (live_type === "flv") {
        await this.flvResourceLoad(live_url);
      } else {
        await this.otherResourceLoad(live_url, live_type);
      }
    },
    hlsResourceLoad(live_url) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(live_url);
        hls.attachMedia(this.player.media);
        window.hls = hls;
      }
    },
    flvResourceLoad(live_url) {
      if (flvjs.isSupported()) {
        let videoElement = document.getElementById("plyr");
        let flvPlayer = flvjs.createPlayer({
          type: "flv",
          url: live_url
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
      }
    },
    otherResourceLoad(live_url, live_type) {
      if (isVideo(live_url)) {
        let sourceNode = document.createElement("source");
        sourceNode.setAttribute("src", live_url);
        sourceNode.setAttribute("type", `video/${live_type}`);
        let videoElement = document.getElementById("plyr");
        videoElement.appendChild(sourceNode);
        this.$refs.plyr.player.play();
      } else {
        this.$buefy.snackbar.open({
          duration: 5000,
          message: "视频格式不支持",
          type: "is-danger",
          position: "is-bottom-right",
          actionText: "Msg"
        });
      }
    }
  }
};
</script>

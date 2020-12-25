<template>
  <div class="video">
    <div class="ls-chat-box border">
      <div class="ls-main-title">
        <h4>筱娱乐</h4>
      </div>
      <div class="ls-search-box">
        <div class="field">
          <div class="control has-icons-left">
            <input
              class="input is-small is-rounded"
              type="text"
              placeholder="搜索"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="ls-chat-list">
        <div class="ls-title">
          <span class="ls-text">筱知识</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><two-ellipses theme="outline" size="14" fill="#333"/></span>
          <span class="ls-text ls-bold black ml2">央视TV</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><tv theme="outline" size="14" fill="#333"/></span>
          <span class="ls-text ls-bold black ml2">热门卫视</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><xigua theme="outline" size="14" fill="#333"/></span>
          <span class="ls-text ls-bold black ml2">热门直播</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><movie-board theme="outline" size="14" fill="#333"/></span>
          <span class="ls-text ls-bold black ml2">影音娱乐</span>
        </div>
      </div>
    </div>
    <div class="ls-section-box">
      <div class="video-box">
         <div class="columns is-multiline is-fullheight">
            <div class="column is-4" v-for="(m, index) in 10" :key="index">
              <div class="card large">
                <div class="card-image">
                  <figure class="image is-16by9">
                    <img
                      src="../assets/th.jpg"
                      alt="Image"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img class="is-rounded" src="../assets/avatars/01.jpg" alt="Image"/>
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-6 no-padding">LPL夏季赛W10D7</p>
                      <p>
                        <span class="title is-7"
                          ><a href="http://twitter.com/twitterid">
                            2020.09.08 - 2020.09.09
                          </a></span
                        >
                      </p>
                    </div>
                    <i class="far fa-play-circle play" @click="jumpVideoPlayer(index)"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { TwoEllipses, Tv, Xigua, MovieBoard, DEFAULT_ICON_CONFIGS } from '@icon-park/vue'
const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'icon' }

export default {
  name: 'Video1',
  provide() {
    return {
      ICON_CONFIGS: IconConfig,
    }
  },
  data() {
    return {
    }
  },
  components: {
    TwoEllipses,
    Tv,
    Xigua,
    MovieBoard,
  },
   methods: {
    jumpVideoPlayer(index) {
      this.$router.push({path: `/video_detail/${index}`})
    }
  }
}
</script>

<style lang="less" scope>
.video {
  display: flex;
  justify-content: flex-start;
}

.ls-main-title {
  padding: 20px 0 10px 10px;
  h4 {
    font-size: 18px;
    font-weight: bold;
    color: #4a4a4a;
  }
}

.ls-chat-box {
  width: 260px;
}

.ls-search-box {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #cecece;
}

.ls-chat-list {
  overflow-y: auto;
  overflow-x: hidden;
  height: 714px;
}

.ls-section-box {
  width: 100%;
  height: 100%;
}

.auto-overflow {
  overflow-y: auto !important;
}

.ls-title {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-left: 12px;
}

.ls-text {
  font-size: 14px;
  color: #9b9494;
}

.ls-bold {
  font-weight: bold;
}

.black {
  color: #666;
}

.ml2 {
  margin-left: 20px;
}

.ls-menu-box {
  width: 90%;
  margin: 0 auto;
  padding: 5px 10px;
  border-radius: 6px;
  .ls-menu-item {
    padding: 10px;
  }
  &:hover {
    background-color: #eee7e7;
    cursor: pointer;
  }
}

.play {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 36px;
  margin: -100px 0 0 -25px;
  transform: scale(2);
  transition: all .25s ease-out;
  color: #fff;
  &:hover {
    opacity: 0.9;
  }
}

.card {
  &:hover {
    box-shadow: #cecece;
    cursor: pointer;
  }
}

.video-box {
  padding: 30px;
}
</style>

<template>
  <div class="email">
    <div class="ls-email-title">
      <h4>筱娱乐播放</h4>
    </div>
    <div id="mail-app" class="columns">
      <aside class="aside hero is-fullheight">
        <div>
          <div class="main">
            <a href="#" class="item active"
              ><span class="icon"><i class="fa fa-inbox"></i></span
              ><span class="name">虎牙直播</span></a
            >
            <a href="#" class="item"
              ><span class="icon"><i class="fa fa-star"></i></span
              ><span class="name">斗鱼直播</span></a
            >
            <a href="#" class="item"
              ><span class="icon"><i class="fa fa-envelope"></i></span
              ><span class="name">B站直播</span></a
            >
            <a href="#" class="item"
              ><span class="icon"><i class="fa fa-folder"></i></span
              ><span class="name">央视直播</span></a
            >
          </div>
        </div>
      </aside>
      <div class="message-feed messages hero is-fullheight">
        <div>
          <h3>dassdad</h3>
        </div>
        <div class="section">
         <VideoPlayer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoPlayer from '@/components/VideoPlayer.vue'

export default {
  name: 'VideoDetail',
  components: {
    VideoPlayer
  },
  data() {
    return {}
  },
}
</script>

<style lang="less" scope>
.aside {
  display: block;
  width: 240px;
  background-color: #f9f9f9;
  border-right: 1px solid #dedede;
}

.message-feed {
  width: 100%;
  overflow-y: auto;
  height: 600px;
}

.columns {
  margin: 0;
}

.ls-email-title {
  height: 60px;
  border: 1px solid #cecece;
  padding: 10px 0 20px 20px;
  h4 {
    font-size: 18px;
    font-weight: bold;
    color: #4a4a4a;
  }
}

.messages {
  display: block;
  background-color: #fff;
  border-right: 1px solid #dedede;
  padding: 0px 20px;
}
.message {
  display: block;
  background-color: #fff;
  padding: 40px 20px;
}
.aside .main {
  padding: 40px;
  color: #6f7b7e;
}
.aside .title {
  color: #6f7b7e;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
}
.aside .main .item {
  display: block;
  padding: 10px 0;
  color: #6f7b7e;
}
.aside .main .item.active {
  background-color: #f1f1f1;
  margin: 0 -50px;
  padding-left: 50px;
}
.aside .main .item:active,
.aside .main .item:hover {
  background-color: #f2f2f2;
  margin: 0 -50px;
  padding-left: 50px;
}
.aside .main .icon {
  font-size: 19px;
  padding-right: 30px;
  color: #a0a0a0;
}
.aside .main .name {
  font-size: 15px;
  color: #5d5d5d;
  font-weight: 500;
}

.section {
  padding: 0;
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
</style>

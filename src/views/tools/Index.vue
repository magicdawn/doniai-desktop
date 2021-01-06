<template>
  <div class="book">
    <div class="ls-chat-box border">
      <div class="ls-main-title">
        <h4>筱工具</h4>
      </div>
      <div class="ls-search-box">
        <div class="field">
          <div class="control has-icons-left">
            <input
              class="input is-small is-rounded"
              type="text"
              placeholder="搜索工具"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="ls-chat-list">
        <div class="ls-title">
          <span class="ls-text">热门工具</span>
        </div>
        <div class="ls-menu-box" @click="jumpTicket">
          <span class="ls-text"
            ><user theme="outline" size="14" fill="#333"
          /></span>
          <span class="ls-text ls-bold black ml2">12306查票工具</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"
            ><user theme="outline" size="14" fill="#333"
          /></span>
          <span class="ls-text ls-bold black ml2">比特币交易行情</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"
            ><user theme="outline" size="14" fill="#333"
          /></span>
          <span class="ls-text ls-bold black ml2">外汇汇率</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"
            ><user theme="outline" size="14" fill="#333"
          /></span>
          <span class="ls-text ls-bold black ml2">邮箱检测</span>
        </div>
      </div>
    </div>
    <div class="ls-section-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { User, DEFAULT_ICON_CONFIGS } from '@icon-park/vue'
const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'icon' }

export default {
  name: 'Tools',
  provide() {
    return {
      ICON_CONFIGS: IconConfig,
    }
  },
  data() {
    return {}
  },
  components: {
    User,
  },
  methods: {
    jumpTicket() {
      this.$router.push({ name: 'ToolsTicket'})
    }
  },
}
</script>

<style lang="less" scope>
.book {
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
  background: #ebebeb;
  width: 100%;
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
</style>

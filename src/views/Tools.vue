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
        <div class="ls-menu-box">
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
      <!-- <div class="book-box">
        <div class="columns ls-flex-col">
          <div class="column is-three-quarters">
            <div class="post">
              <div class="widget">
                <a href="#" class="sub-title title-underline">
                  常用工具
                </a>
              </div>
              <div class="tab-item">
                <a
                  href="https://www.baidu.com"
                  target="_blank"
                  class="box-item is-primary"
                  >12306查票工具</a
                >
                <a
                  href="https://www.baidu.com"
                  target="_blank"
                  class="box-item is-success"
                  >比特币交易行情</a
                >
                <a
                  href="https://www.baidu.com"
                  target="_blank"
                  class="box-item is-warning"
                  >外汇汇率</a
                >
                <a
                  href="https://www.baidu.com"
                  target="_blank"
                  class="box-item is-info"
                  >邮箱检测</a
                >
              </div>
            </div>
          </div>
          <div class="column is-three-quarters">
            <div class="post">
              <div class="widget">
                <a href="#" class="sub-title title-underline">
                  其他工具
                </a>
              </div>
              <div class="tab-item">
                <a
                  href="https://www.baidu.com"
                  target="_blank"
                  class="box-item is-primary"
                  >文件格式转换</a
                >
                <a
                  href="https://www.baidu.com"
                  target="_blank"
                  class="box-item is-success"
                  >验机报告</a
                >
                <a
                  href="https://www.baidu.com"
                  target="_blank"
                  class="box-item is-warning"
                  >市政数据</a
                >
                <a
                  href="https://www.baidu.com"
                  target="_blank"
                  class="box-item is-info"
                  >淘宝客数据</a
                >
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="book-box">
        <div class="container">
          adadsa
        </div>
      </div>
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
  methods: {},
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

.book-box {
  padding: 30px;
}

.post {
  background: #fff;
  padding: 25px;
  display: block;
  margin-bottom: 20px;
}

.widget {
  margin-bottom: 20px;
}

.title-underline {
  text-decoration: none;
  border-bottom: 1px solid #e67e22;
}

a {
  color: #7957d5;
  cursor: pointer;
}

.tab-item {
  .box-item {
    box-shadow: 1px 1px 5px #ccc5c5;
  }

  a {
    color: #fff;
    font-size: 14px;
    display: inline-block;
    width: 25%;
    height: 35px;
    line-height: 35px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 10px 34px 10px 0;
    text-align: center;
    border-radius: 3px;
    text-decoration: none;
  }
}

.is-primary {
  background-color: #6943d0;
}

.is-success {
  background-color: #20bc56;
}

.is-warning {
  background-color: #ffd83d;
}

.is-info {
  background-color: #0e71de;
}

.is-danger {
  background-color: #ff3860;
}

.ls-flex-col {
  flex-direction: column;
}
</style>

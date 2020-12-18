<template>
  <div class="home">
    <div class="ls-chat-box border">
      <div class="ls-search-box">
        <div class="field">
          <div class="control has-icons-left">
            <input class="input is-small is-rounded" type="text" placeholder="搜索">
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
        <div>
          <button class="button is-small is-rounded">
            <span class="icon is-small">
              <i class="fas fa-plus"></i>
            </span>
          </button>
        </div>
      </div>
   
      <div class="ls-chat-list">
        <ChatItem v-for="(item) in chatList" :key="item.id" :name="item.name" :content="item.content" :time="item.time"/>
      </div> 
    </div>
    <div class="ls-section-box">
      <div class="border ls-section-header">
        <article class="media">
          <figure class="media-left">
            <p class="image is-48x48">
              <img class="ls-avatar" src="../assets/avatar.jpg">
            </p>
          </figure>
          <div class="media-content">
            <div class="content ml-2">
              <p>
                <b-tooltip label="管欣" type="is-dark" position="is-bottom">
                  <strong>管欣</strong> 
                </b-tooltip>
                <b-tooltip label="工作中" type="is-dark" position="is-right">
                  <small class="ml-2">工作中</small>
                </b-tooltip>
                <br>
                <b-tooltip label="点击复制" type="is-dark" position="is-bottom">
                  <span class="ls-chat-content">
                    黄石品信进出口贸易有限公司
                  </span>
                </b-tooltip>
              </p>
            </div>
          </div>
        </article>
      </div>
      <div class="ls-section-main">
        <div class="ls-bottom-border ls-section-content">
          <ChatContent class="pd2"/>
        </div>
        <div class="sent-box">
          <ChatOperate/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ChatOperate from '@/components/ChatOperate.vue'
import ChatContent from '@/components/ChatContent.vue'
import ChatItem from '@/components/ChatItem.vue'

export default {
  name: 'Home',
  components: {
    ChatOperate,
    ChatContent,
    ChatItem
  },
  data() {
    return {
      chatList: [
        {
          id: 1,
          name: '管欣',
          content: '你好吗?',
          time: '12:45'
        },
        {
          id: 2,
          name: '刘备',
          content: '今天天气好吗?',
          time: '12:45'
        },
        {
          id: 3,
          name: '张飞',
          content: '深圳的机票好买吗?',
          time: '12:45'
        },
         {
          id: 4,
          name: '管欣',
          content: '你好吗?',
          time: '12:45'
        },
        {
          id: 5,
          name: '刘备',
          content: '今天天气好吗?',
          time: '12:45'
        },
        {
          id: 6,
          name: '张飞',
          content: '深圳的机票好买吗?',
          time: '12:45'
        },
         {
          id: 7,
          name: '管欣',
          content: '你好吗?',
          time: '12:45'
        },
        {
          id: 8,
          name: '刘备',
          content: '今天天气好吗?',
          time: '12:45'
        },
        {
          id: 9,
          name: '张飞',
          content: '深圳的机票好买吗?',
          time: '12:45'
        },
         {
          id: 10,
          name: '管欣',
          content: '你好吗?',
          time: '12:45'
        },
        {
          id: 11,
          name: '刘备',
          content: '今天天气好吗?',
          time: '12:45'
        },
        {
          id: 12,
          name: '张飞',
          content: '深圳的机票好买吗?',
          time: '12:45'
        },
         {
          id: 13,
          name: '管欣',
          content: '你好吗?',
          time: '12:45'
        },
        {
          id: 14,
          name: '刘备',
          content: '今天天气好吗?',
          time: '12:45'
        },
        {
          id: 15,
          name: '张飞',
          content: '深圳的机票好买吗?',
          time: '12:45'
        },
         {
          id: 16,
          name: '管欣',
          content: '你好吗?',
          time: '12:45'
        },
        {
          id: 17,
          name: '刘备',
          content: '今天天气好吗?',
          time: '12:45'
        },
        {
          id: 18,
          name: '张飞',
          content: '深圳的机票好买吗?',
          time: '12:45'
        },
         {
          id: 19,
          name: '管欣',
          content: '你好吗?',
          time: '12:45'
        },
        {
          id: 20,
          name: '刘备',
          content: '今天天气好吗?',
          time: '12:45'
        },
        {
          id: 21,
          name: '张飞',
          content: '深圳的机票好买吗?',
          time: '12:45'
        },
         {
          id: 22,
          name: '管欣',
          content: '你好吗?',
          time: '12:45'
        },
        {
          id: 23,
          name: '刘备',
          content: '今天天气好吗?',
          time: '12:45'
        },
        {
          id: 24,
          name: '张飞',
          content: '深圳的机票好买吗?',
          time: '12:45'
        },
      ]
    }
  }
}
</script>

<style lang="less" scope>
.home {
  display: flex;
  justify-content: flex-start;
}

.ls-chat-box {
  width: 260px;
}

.ls-section-main {
  height: 100%;
  .ls-section-content {
    overflow-y: auto;
    height: 400px;
  }
}

.ls-bottom-border {
  border-bottom: 1px solid #cecece;
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
}

.ls-section-header {
  height: 64px;
}
</style>

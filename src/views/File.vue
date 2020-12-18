<template>
  <div class="file">
    <div class="ls-chat-box border">
      <div class="ls-main-title">
        <h4>筱盘与文档</h4>
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
          <span class="ls-text">筱盘</span>
          <span class="ls-more">
            <svg
              t="1608196309455"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1304"
              width="200"
              height="200"
            >
              <path
                d="M195.648 448c35.392 0 64 28.608 64 64s-28.608 64-64 64-64-28.608-64-64S160.256 448 195.648 448L195.648 448zM508.352 448c-35.392 0-64 28.608-64 64s28.608 64 64 64 64-28.608 64-64S543.744 448 508.352 448L508.352 448zM828.352 448c-35.392 0-64 28.608-64 64s28.608 64 64 64 64-28.608 64-64S863.744 448 828.352 448L828.352 448z"
                p-id="1305"
              ></path>
            </svg>
          </span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><i class="fas fa-folder-open"></i></span>
          <span class="ls-text ls-bold black ml2">私人盘</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><i class="fas fa-trash"></i></span>
          <span class="ls-text ls-bold black ml2">回收站</span>
        </div>
        <div class="ls-title">
          <span class="ls-text">筱文档</span>
        </div>
        <div class="ls-menu-box">
          <span class="ls-text"><i class="fas fa-fire-alt"></i></span>
          <span class="ls-text ls-bold black ml2">知识库</span>
        </div>
      </div>
    </div>
    <div class="ls-section-box">
      <div class="ls-section-title">
        <div>
          <h3>最近</h3>
        </div>
      </div>
      <div class="ls-section-btn">
        <div>
          <button class="button is-success is-small is-rounded">
            <span class="icon is-small">
              <i class="fas fa-upload"></i>
            </span>
            <span>上传</span>
          </button>
        </div>
      </div>
      <div class="ls-section-navs">
        <div class="tabs">
          <ul>
            <li class="is-active"><a>全部</a></li>
            <li><a>文档</a></li>
            <li><a>表格</a></li>
            <li><a>视频</a></li>
            <li><a>音乐</a></li>
            <li><a>知识库</a></li>
            <li><a>其他</a></li>
          </ul>
        </div>
      </div>

      <div class="ls-section-table">
        <b-table
          :data="fileList"
          :columns="checkableColumns"
          sticky-header
          checkable
          sticky-checkbox
        ></b-table>
        <!-- <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>文件名称</th>
              <th>最近使用</th>
              <th>大小</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in fileList" :key="index">
              <th>{{item.name}}</th>
              <td>
                <a
                  href="#"
                  title="Leicester City F.C."
                  >{{item.time}}</a
                >
              </td>
              <td>{{item.size}}</td>
              <td>...</td>
            </tr>
          </tbody>
        </table> -->
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
    ChatItem,
  },
  data() {
    return {
      fileList: [
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
        {
          name: '夜鹰助手.docx',
          time: '2020/12/17 17:44:45',
          size: '11.45kb',
        },
      ],
    }
  },
  computed: {
    columns() {
      return [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true,
          sticky: true,
          headerClass: 'is-sticky-column-one',
          cellClass: 'is-sticky-column-one',
        },
        {
          field: 'name',
          label: '文件名称',
        },
        {
          field: 'time',
          label: '最近使用',
        },
        {
          field: 'size',
          label: '大小',
        },
        {
          field: '',
          label: '操作',
        },
      ]
    },
    checkableColumns() {
      return [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true,
          sticky: false,
        },
          {
          field: 'name',
          label: '文件名称',
        },
        {
          field: 'time',
          label: '最近使用',
        },
        {
          field: 'size',
          label: '大小',
        },
        {
          field: '',
          label: '操作',
        }
      ]
    },
  },
}
</script>

<style lang="less" scope>
.file {
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

.ls-more {
  cursor: pointer;
}

.ls-section-title {
  padding: 20px;
}

.ls-section-btn {
  padding: 0 20px;
}

.ls-section-navs {
  padding: 20px;
}

.ls-section-table {
  padding: 0 40px 20px 20px;
  table {
    tbody {
      overflow-y: auto !important;
    }
  }
}

.tabs {
  ul {
    border: 0;
    .is-active {
      text-decoration: underline;
    }
  }
}

.has-sticky-header {
  height: 600px!important;
}
</style>

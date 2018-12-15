<template>
  <div class="container">
    <div class="index-search">
      <div class="index-city" @click="showIndex = true">上海市</div>
      <div class="search">
        <input class="search-txt" type="search" placeholder="搜索美食/地点">
        <label class="search-label">
          <p>搜索美食/地点</p>
        </label>
      </div>
    </div>
    <div class="index-top">
      <img src="./images/index-bg.png" alt="" class="index-top-bg">
      <div class="video" v-if="banner.videoPath">
        <video :src="banner.videoPath" :poster="banner.imgPath" :controls="true" objectFit="cover"></video>
      </div>
    </div>
    <div class="i-index-demo" v-show="showIndex">
      <i-index height="100%" @change="changeIndex">
        <div class="i-index-demo-item" @click="chooseCity()">上海市</div>
        <i-index-item v-for="(item, index) in cities" :key="item.key" :name="item.key">
          <div class="i-index-demo-item" v-for="(it, itemIndex) in item.list" :key="it.id"
               @click="chooseCity(it)">{{it.name}}
          </div>
        </i-index-item>
      </i-index>
    </div>
    <div class="index-item">
      <div class="index-title">
        <h2><span class="green"></span><em>达人推荐</em></h2>
        <div class="more">更多</div>
      </div>
      <ul class="index-super-list">
        <li v-for="item in supers" :key="item.id">
          <div class="index-super-avatar">
            <img :src="item.headImg">
          </div>
          <p>{{item.nickname}}</p>
        </li>
      </ul>
    </div>
    <div class="index-super index-item">
      <div class="index-title">
        <h2><span class="purple"></span><em>热门商圈</em></h2>
        <div class="more">更多</div>
      </div>
    </div>
    <div class="index-super index-item">
      <div class="index-title">
        <h2><span class="pink"></span><em>推荐路线</em></h2>
        <div class="more">更多</div>
      </div>
      <li v-for="item in lines" :key="item.id">
        <div class="index-super-avatar">
          <img :src="item.background">
        </div>
        <p>{{item.name}}</p>
      </li>
    </div>
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover"/>
      <div class="userinfo-nickname">
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model"/>
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy"/>
    </form>
    <van-dialog id="van-dialog"/>
  </div>
</template>

<script>
  import cities from '@/pages/index/city'
  import { getIndexInfo } from '@/services'
  // import Dialog from '../../../static/vant/dialog/dialog'
  // import http from '../../utils/http'

  export default {
    config: {
      'navigationBarTitleText': '首页',
      'usingComponents': {
        'i-button': '/static/iview/button/index',
        'i-index': '/static/iview/index/index',
        'i-index-item': '/static/iview/index-item/index',
        'van-dialog': '/static/vant/dialog/index'
      }
    },
    data () {
      return {
        motto: 'Hello World',
        userInfo: {},
        cities,
        showIndex: false,
        lines: [],
        shares: [],
        banner: {},
        supers: [],
        activitys: [],
        categorys: []
      }
    },
    methods: {
      chooseCity (id) {
        console.log(id)
        this.showIndex = false
      },
      changeIndex () {
        console.log(arguments)
      },
      bindViewTap () {
        this.showIndex = true
        // const url = '../logs/main'
        // wx.navigateTo({ url })
      },
      getUserInfo () {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
              }
            })
          }
        })
      },
      clickHandle (msg, ev) {
        console.log('clickHandle:', msg, ev)
      }
    },

    created () {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    },
    async mounted () {
      const data = await getIndexInfo()
      Object.assign(this, data)
      // Dialog.confirm({
      //   title: '登陆',
      //   message: '弹窗内容',
      //   confirmButtonOpenType: 'getUserInfo'
      // }).then(() => {
      //   // on confirm
      // }).catch(() => {
      //   // on cancel
      // })
      // http.get('http://112.74.40.0:9999/front/index/getIndexInfo')
    }
  }
</script>

<style lang="scss">

  .index-search {
    display: flex;
    height: 44px;
    align-items: center;
    background-color: $color-primary;
    padding: 0 $gutter;
  }

  .search {
    flex: 1;
    position: relative;
    height: 30px;
  }

  .search-txt {
    width: 100%;
    height: 30px;
    background-color: #ffffff;
    border-radius: 18px;
  }

  .search-label {
    position: absolute;
    background-color: #ffffff;
    border-radius: 18px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 30px;
    text-align: center;
  }

  .index-city {
    color: #ffffff;
    width: 55px;
    background-color: transparent;
  }

  .index-top {
    position: relative;
    height: 193px;
    padding: 5px $gutter 0;
  }

  .video video {
    width: 100%;
    height: 193px;
    background-color: #d8d8d8;
    box-shadow: 0px 2px 4px 0px rgba(114, 73, 56, 0.3);
    border-radius: 4px;
    margin: 0 auto;
    display: block;
  }

  .index-top-bg {
    position: absolute;
    width: 100%;
    height: 133px;
    left: 0;
    top: 0;
    z-index: 0;
  }

  .i-index-demo {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    background-color: #ffffff;
  }

  .i-index-demo-item {
    padding: 10px;
    border-bottom: #ddd solid 1px;
    font-size: 14px;
  }

  .index-item {
    background-color: #ffffff;
    border-bottom: 10px solid #f7f7f7;
    padding: 0 $gutter $gutter;
  }

  .index-title {
    height: 41px;
    position: relative;
    h2 {
      padding-top: 6px;
      line-height: 1;
      font-size: 16px;
      position: relative;
    }
    span {
      position: absolute;
      width: 67px;
      height: 6px;
      left: 3px;
      bottom: -2px;
    }
    em {
      position: relative;
    }
    .green {
      background-image: linear-gradient(135deg, #92d76f, #47a418);
    }
    .purple {
      background-image: linear-gradient(135deg, #8e8bfa, #ffab88);
    }
    .pink {
      background-image: linear-gradient(135deg, #ff30a4, #ffab88);
    }
    .more {
      position: absolute;
      width: 42px;
      height: 100%;
      top: 0;
      right: -$gutter;
      background: url("./images/more.png") center / 8px auto no-repeat;
      font-size: 0;
    }
  }

  .index-super-list {
    height: 96px;
    text-align: center;
    font-size: 0;
    li {
      box-sizing: border-box;
      margin-left: 12px;
      display: inline-block;
      width: 77px;
      height: 96px;
      background-color: #ffffff;
      box-shadow: 0px 2px 4px 0px rgba(114, 73, 56, 0.3);
      border-radius: 4px;
      border: solid 1px #e6e6e6;
      color: #4a4a4a;
      &:first-child {
        margin-left: 0;
      }
    }
    p {
      font-size: 10px;
      letter-spacing: -0.3px;
      line-height: 1;
      @include ellipsis;
    }
  }

  .index-super-avatar {
    width: 50px;
    height: 50px;
    padding: 2px;
    box-sizing: border-box;
    background: linear-gradient(#815d31, #deba8c);
    background-clip: padding-box;
    border-radius: 50%;
    margin: 12px auto 8px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    width: 128px;
    height: 128px;
    margin: 20px;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }

  .usermotto {
    margin-top: 150px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

</style>

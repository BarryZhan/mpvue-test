<template>
  <div class="container">
    <datetime-picker
      type="date"
      :value="currentDate"
      :min-date="minDate"
      @change="onChange"
    />
  </div>
</template>

<script>
  import cities from '@/pages/index/city'
  import { getIndexInfo } from '@/services'
  // import Dialog from '../../../static/vant/dialog/dialog'
  // import http from '../../utils/http'

  export default {
    config: {
      'navigationBarTitleText': '全部活动',
      'usingComponents': {
        'datetime-picker': '/static/vant/datetime-picker/index'
      }
    },
    data () {
      return {
        currentDate: new Date().getTime(),
        minDate: new Date().getTime(),
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
      onChange () {
        console.log(arguments)
      },
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


</style>

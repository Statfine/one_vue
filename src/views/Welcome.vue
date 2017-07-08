<template>
    <div class="welcome">
        <p>ONE</p>
        <p>For</p>
        <p>You</p>
        <p class="time">地球历{{ time }}</p>
    </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        time: '',
        backward: 3,
        intervalTime: {}
      }
    },
    mounted () {
      this.getTime()
      this.toHome()
    },
//    beforeRouteLeave (to, from, next) {
//      next((vm) => {
//        this.welcome()
//      })
//    },
    methods: {
      getTime () {
        const myDate = new Date()
        this.time = this.set(`${myDate.getFullYear()}年${myDate.getMonth() + 1}月`)
      },
      set (date) {
        const time = date.replace(/1/g, '一')
          .replace(/2/g, '二')
          .replace(/3/g, '三')
          .replace(/4/g, '四')
          .replace(/5/g, '五')
          .replace(/6/g, '六')
          .replace(/7/g, '七')
          .replace(/8/g, '八')
          .replace(/9/g, '九')
        return time
      },
      // 开启定时3秒跳转
      toHome () {
        this.intervalTime = setInterval(() => {
          const backward = this.backward - 2
          if (backward > 1) this.backward = backward
          else {
            this.welcome()
            clearInterval(this.intervalTime)
            this.$router.push('/list')
          }
        }, 2000)
      },
      // 修改是否是首次登录
      welcome () {
        this.$store.dispatch('welcome', true)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .welcome {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #231f21;
        position: relative;
        background: #fff;
    }
    .welcome p {
        font-size: 3rem;
    }
    .time {
        position: absolute;
        bottom: 10px;
        font-size: 1.2rem!important;
        right: 20px;
        color: #838383;
    }
</style>

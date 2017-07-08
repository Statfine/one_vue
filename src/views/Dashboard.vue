<template>
    <!-- 父组件嵌套子组建 -->
    <div class="content-container">
        <router-view></router-view>
        <FooterCom :index="index"></FooterCom>
    </div>
</template>

<script>
  import FooterCom from '../components/Footer.vue'
  export default {
    name: 'home',
    data () {
      return {
        index: '1'
      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'hideMenuSlide'
    },
    components: {
      FooterCom
    },
    methods: {
      hideMenuSlide () {
        this.index = this.$route.path
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content-container {
        height: 100vh;
        width: 100vw;
        position: relative;
        display: flex;
        flex-direction: column;
    }
</style>

<template>
    <!-- 父组件嵌套子组建 -->
    <div class="content-container">
        <router-view></router-view>
        <div class="music-content" v-if="appMusci.play">
            <div class="music"><i class="glyphicon glyphicon-music"></i></div>
        </div>
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
    computed: {
      appMusci () {
        return this.$store.state.app.music
      }
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
    @keyframes ani
    {
        0%{ transform:rotate(0deg); }
        100%{ transform:rotate(360deg); }
    }
    .content-container {
        height: 100vh;
        width: 100vw;
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .music-content {
        position: fixed;
        width: 3rem;
        background: rgba(0, 0, 0, 0.6);
        right: 0;
        top: 16%;
        height: 2rem;
        line-height: 2rem;
    }
    .music {
        height: 2rem;
        background: #e6e6e6;
        width: 2rem;
        border-radius: 50%;
        margin-left: -1rem;
        animation: ani 5s infinite linear;
    }
</style>

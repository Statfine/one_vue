<template>
    <div class="content-container">
        <HeaderCom :titleObj="titleObj"></HeaderCom>
        <LoadingCom v-if="movePageState.requesting"></LoadingCom>
        <div class="list-div">
            <div class="item" v-for="item in movePagelist">
                <p class="top">-影视-</p>
                <p class="title">{{ item.title }}</p>
                <p class="auther">文&nbsp;/&nbsp;{{ item.author.user_name }}</p>
                <img class="cover" :src=item.img_url />
                <p class="words">{{ item.forward }}</p>
                <p class="subtitle">——《{{ item.subtitle }}》</p>
                <div class="bottom-info">
                    <div>{{ item.post_date.substring(0, 10) }}</div>
                    <div>{{ item.like_count }}&nbsp;&nbsp;<i class="glyphicon glyphicon-heart like"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import HeaderCom from '../components/Header.vue'
  import LoadingCom from '../components/Loading.vue'
  export default {
    name: 'move',
    components: {
      HeaderCom,
      LoadingCom
    },
    data () {
      return {
        titleObj: {
          title: '一个电影',
          hint: ''
        }
      }
    },
    computed: {
      movePageState () {
        return this.$store.state.movePage
      },
      movePagelist () {
        return this.$store.getters.movePagelist
      }
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.getDetailData(vm)
      })
    },
    methods: {
      getDetailData () {
        this.$store.dispatch('getMove')
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
        color: red;
        padding: 60px 0;
        flex: 1 1 0%;
    }
    .list-div {
        padding-bottom: 60px;
        background-color: #3e3e3e;
    }
    .item {
        margin-bottom: 20px;
        background: #4a4a4a;
        color: #b7b7b7;
        padding: 0 20px;
    }
    .top {
        text-align: center;
        font-size: 1rem;
        padding: 10px;
    }
    .title {
        font-size: 1.8rem;
        padding-bottom: 10px;
    }
    .auther {
        font-size: 1.2rem;
        padding-bottom: 10px;
    }
    .cover {
        width: 100%;
        height: auto
    }
    .words {
        font-size: 1.3rem;
        padding: 10px 0;
    }
    .subtitle {
        font-size: 1.3rem;
        text-align: right;
    }
    .bottom-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        color: #6b6b6b;
        font-size: 1.2rem;
    }
    .like {
        color: #fff;
    }
</style>

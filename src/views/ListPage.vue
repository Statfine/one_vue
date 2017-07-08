<template>
    <div class="content-container">
        <HeaderCom :titleObj="titleObj"></HeaderCom>
        <LoadingCom v-if="listPageState.requesting"></LoadingCom>
        <div class="list-div">
            <div class="item" v-for="item in homePagelist">
                <img class="cover" :src=item.img_url />
                <p class="title">{{ item.title }}&nbsp;&nbsp;|&nbsp;&nbsp;{{ item.pic_info }}</p>
                <p class="forward">{{ item.forward }}</p>
                <p class="words">{{ item.words_info }}</p>
                <div class="bottom-info">
                    <div></div>
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
    name: 'list',
    components: {
      HeaderCom,
      LoadingCom
    },
    data () {
      return {
        titleObj: {
          title: '一个',
          hint: ''
        }
      }
    },
    computed: {
      listPageState () {
        return this.$store.state.homeList
      },
      homePagelist () {
        return this.$store.getters.homePagelist
      }
    },
//    beforeRouteEnter (to, from, next) {
//      next((vm) => {
//        vm.getDetailData(vm)
//      })
//    },
    mounted () {
      this.getDetailData()
    },
    methods: {
      getDetailData () {
        this.$store.dispatch('getList')
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
    .cover {
        width: 100%;
        height: auto
    }
    .title {
        text-align: center;
        font-size: 1.5rem;
        padding: 10px;
    }
    .forward {
        text-align: center;
        font-size: 1.6rem;
        padding-bottom: 10px;
    }
    .words {
        text-align: center;
        font-size: 1.5rem;
        padding-bottom: 10px;
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

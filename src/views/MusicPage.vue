<template>
    <div class="content-container">
        <HeaderCom :titleObj="titleObj"></HeaderCom>
        <LoadingCom v-if="musicPageState.requesting"></LoadingCom>
        <div class="list-div">
            <!--<div v-for="item in musicPagelist" class="item" v-on:click='play(item)'>-->
                <!--<p class="top">-音乐-</p>-->
                <!--<p class="title">{{ item.title }}</p>-->
                <!--<p class="auther">文&nbsp;/&nbsp;{{ item.author.user_name }}</p>-->
                <!--<div ref="imageCover" class="image-content" :class="{imageCntent: item.id == appMusci.id}"><img class="cover" :src=item.img_url /></div>-->
                <!--<p class="audio-auther">{{ item.music_name }}&nbsp;.&nbsp;{{ item.audio_author }}</p>-->
                <!--<p class="words">{{ item.forward }}</p>-->
                <!--<div class="bottom-info">-->
                    <!--<div>{{ item.post_date.substring(0, 10) }}</div>-->
                    <!--<div>{{ item.like_count }}&nbsp;&nbsp;<i class="glyphicon glyphicon-heart like"></i></div>-->
                <!--</div>-->
            <!--</div>-->
            <div v-for="item in musicPagelist">
                <MusicitemCom :item="item"></MusicitemCom>
            </div>
        </div>
    </div>
</template>

<script>
  import HeaderCom from '../components/Header.vue'
  import LoadingCom from '../components/Loading.vue'
  import MusicitemCom from '../components/ItemMusic.vue'
  export default {
    name: 'music',
    components: {
      HeaderCom,
      LoadingCom,
      MusicitemCom
    },
    data () {
      return {
        titleObj: {
          title: '一个 音乐',
          hint: ''
        }
      }
    },
    computed: {
      musicPageState () {
        return this.$store.state.musicPage
      },
      musicPagelist () {
        return this.$store.getters.musicPagelist
      }
    },
    beforeRouteEnter (to, from, next) {
      next((vm) => {
        vm.getDetailData(vm)
      })
    },
    methods: {
      getDetailData () {
        this.$store.dispatch('getMusic')
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
    .image-content {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
    }
    .cover {
        width: 60%;
        height: auto;
        border-radius: 50%;
    }
    .audio-auther {
        font-size: 1.2rem;
        padding-bottom: 10px;
        color: #6b6b6b;
    }
    .words {
        font-size: 1.3rem;
        padding: 10px 0;
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
    .imageCntent {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        animation: ani 5s infinite linear;
        animation-fill-mode:forwards;
    }
</style>

<template>
    <div class="item" v-on:click='play(item)'>
        <p class="top">-音乐-</p>
        <p class="title">{{ item.title }}</p>
        <p class="auther">文&nbsp;/&nbsp;{{ item.author.user_name }}</p>
        <div ref="imageCover" class="image-content" :class="{imageCntent: item.id == appMusci.id}"><img class="cover" :src=item.img_url /></div>
        <!--<div ref="imageCover" class="image-content imageCntent"><img class="cover" :src=item.img_url /></div>-->
        <p class="audio-auther">{{ item.music_name }}&nbsp;.&nbsp;{{ item.audio_author }}</p>
        <p class="words">{{ item.forward }}</p>
        <div class="bottom-info">
            <div>{{ item.post_date.substring(0, 10) }}</div>
            <div>{{ item.like_count }}&nbsp;&nbsp;<i class="glyphicon glyphicon-heart like"></i></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'MusicitemCom',
    props: {
      item: Object
    },
    computed: {
      appMusci () {
        return this.$store.state.app.music
      }
    },
    mounted () {
      // 改方法暂停动画，所以默认动画就可以添加到元素上，次方法来控制
      this.$refs.imageCover.style.webkitAnimationPlayState = 'paused'
    },
    methods: {
      play (info) {
        const flag = this.appMusci.id === info.id
        this.$refs.imageCover.style.webkitAnimationPlayState = flag ? 'paused' : 'running'
        this.$store.dispatch('changeMusic', { id: flag ? '' : info.id, play: !flag })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    }
    .cover {
        width: 60%;
        height: auto;
        border-radius: 50%;
    }
    .audio-auther {
        font-size: 1.2rem;
        padding-bottom: 10px;
        padding-top: 10px;
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
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        /*margin-bottom: 10px;*/
        /*animation: ani 5s infinite linear;*/
        /*animation-fill-mode:forwards;*/
    }
</style>

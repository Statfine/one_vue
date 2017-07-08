<template>
    <nav class="foot">
        <div class="eachItme" v-on:click='jump("/list")'>
            <i class="glyphicon glyphicon-unchecked" :class="{showbar: index == '/list' || index == '1'}"></i>
        </div>
        <div class="eachItme" v-on:click='jump("/book")'>
            <i class="glyphicon glyphicon-book" :class="{showbar: index == '/book'}"></i>
        </div>
        <div class="eachItme" v-on:click='jump("/music")'>
            <i class="glyphicon glyphicon-music" :class="{showbar: index == '/music'}"></i>
        </div>
        <div class="eachItme" v-on:click='jump("/move")'>
            <i class="glyphicon glyphicon-facetime-video" :class="{showbar: index == '/move'}"></i>
        </div>
    </nav>
</template>

<script>
  import router from '../router'
  export default {
    name: 'FooterCom',
    props: {
      index: String
    },
    methods: {
      jump (url) {
        router.push({ path: url })
      }
    }
  }
</script>

<style scoped>
    .foot {
        width: 100%;
        height: 60px;
        position: fixed;
        bottom: 0px;
        right: 0;
        display: flex;
        color: #c3c3c3;
        background: #4a4a4a;
    }
    .eachItme {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.4rem;
        border-top: 1px solid #3e3e3e;
    }
    .showbar {
        color: #4885ed;
    }
</style>

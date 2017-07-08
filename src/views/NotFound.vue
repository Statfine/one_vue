<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
  export default {
    name: 'notFound',
    data () {
      return {
        msg: '404'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
</style>

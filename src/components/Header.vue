<template>
    <nav class="headerCom">
        <p>{{ titleObj.title }}</p>
        <p v-if="titleObj.hint">{{ titleObj.hint }}</p>
    </nav>
</template>

<script>
  export default {
    name: 'HeaderCom',
    props: {
      titleObj: Object
    }
  }
</script>

<style scoped>
    .headerCom {
        height: 60px;
        position: fixed;
        width: 100%;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #c3c3c3;
        background: #4a4a4a;
        font-size: 2.0rem;
        border-bottom: 1px solid #3e3e3e;
    }
</style>

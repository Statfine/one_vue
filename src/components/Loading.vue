<template>
    <div class="loadingCom">
        <div class="ani">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'LoadingCom'
  }
</script>

<style scoped>
    @keyframes myfirst
    {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .loadingCom {
        z-index: 1;
        left: 0;
        top: 0;
    }
    .ani {
        margin: auto;
        display: flex;
        justify-content: center;
        padding-top: 300px;
        animation: myfirst 0.45s ease;
    }
    .ani span {
        width: 12px;
        height: 12px;
        margin: 5px;
        border-radius: 50%;
        background-color: #4885ED;
        animation: myfirst 1s infinite alternate;
    }
    .ani span:nth-of-type(2) {
         background: #669efe;
         animation-delay: 0.2s;
    }
    .ani span:nth-of-type(3) {
         background: #7fafff;
         animation-delay: 0.4s;
     }
    .ani span:nth-of-type(4) {
         background: #9ac0ff ;
         animation-delay: 0.6s;
    }
    .ani span:nth-of-type(5) {
         background: #abcafd;
         animation-delay: 0.8s;
    }
</style>

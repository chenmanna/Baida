<template>
  <div class="box">
    <div class="box1"></div>
  </div>
</template>

<script>
  
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../styles/base.scss";
  .box{
      width: 100%;
      height: rem(88px);
      background: #ccc;
  }
</style>

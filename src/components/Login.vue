<template>
  <div class="login">
     <header class="nav"></header>
      <el-button type="primary">主要按钮</el-button>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scope>
.nav{
  height: 50px;
  width: 100%;
  background: bisque;
}
</style>

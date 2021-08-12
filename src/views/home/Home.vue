<template>
  <div class="home">
    <el-button @click='logOut' type='info'>退出</el-button>
    home组件
  </div>
</template>
<script>
export default {
  name:'Home',
  methods:{
    logOut(){
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>

</style>
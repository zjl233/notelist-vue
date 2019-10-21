<template>
  <div id="nav">
    <el-menu class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/postVideo">upload</el-menu-item>
      <el-menu-item index="/about">about</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
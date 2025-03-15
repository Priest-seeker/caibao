<template>
  <div id="Header">
    <section class="logo">
      Logo
    </section>
    <el-menu :default-active="router.currentRoute.value.path" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="/Home">首页</el-menu-item>
      <el-menu-item index="/Rooms">Rooms</el-menu-item>
      <el-menu-item index="/About">关于我们</el-menu-item>
    </el-menu>
    <section class="search">
      <el-input :model="data.Search" placeholder="Search" :prefix-icon="Search" class="search-input" />
      <el-button type="primary" round class="search-button">搜索</el-button>
    </section>
    <div class="llr">
      <el-button type="warning" plain v-if="data.user?.token !==  null && data.user?.token !== ''"  class="button">登出</el-button>
      <div v-else>
        <el-button type="primary" plain class="button">注册</el-button>
        <el-button type="success" plain class="button">登入</el-button>
      </div>
    </div>
    <div class="avatar">
      <el-avatar :size="45" :src="data.src" />
    </div>
  </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import router from '../router/index.js';
import { reactive } from 'vue';
const data = reactive({
  Search: '',
  form: {},
  src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  user: {
    token: '',
  }
})
</script>

<style scoped lang="scss">
@use "../assets/sass/HeadNav";
</style>
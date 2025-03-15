<template>
  <div id="Home">
    <div id="Header">
      <Header />
    </div>
    <section class="Home-head">
      <section class="banner">
        <el-carousel height="60vh" motion-blur>
          <el-carousel-item v-for="item in data.imgUrl" :key="item">
            <el-image :src="item" fit="cover" />
          </el-carousel-item>
        </el-carousel>
      </section>
      <section class="animate-content">
        <span>Caibao's Website</span>
      </section>
    </section>

    <section class="room-section">
      <el-card class="room-card" shadow="never">
        <template #header>
          <div class="card-header">
            <span class="title">Hot Rooms</span>
          </div>
        </template>
        <el-collapse v-model="data.activeNames" class="room" :accordion="true">
          <el-collapse-item :name="i" v-for="i in 10" :key="i" class="room-item">
            <template #title>
              <el-icon class="header-icon">
                <el-tooltip class="box-item" effect="dark" content="我不想吃香菜啊喂！" placement="left">
                  <el-avatar :size="30" :src="data.src" />
                </el-tooltip>
              </el-icon>
              <span class="room-title">Consistency</span>
            </template>
            <div>
              <el-text class="mx-1" type="info">
                简介：
              </el-text>
            </div>
            <div class="room-content">
              <div class="content">
                <el-text line-clamp="2">
                  Consistent within interface: all elements should be consistent, such
                as: design style, icons and texts, position of elements, etc.<br/>
                asufauflakhfgasdgjdsjkfhdhgsghjdskgdskjgkdsdddddddddddddsfja;ofo;dsifsadgashfgasfagsjfaopfiisahafagsasafasfsfdvdsfasafsagsagassafasjfa
                </el-text> 
              </div>
              <div>
                <el-button type="primary">进入</el-button>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
        <template #footer>
          <el-pagination layout="prev, pager, next, jumper" :total="100" :hide-on-single-page="true"/>
        </template>
      </el-card>
    </section>

    <el-card shadow="never" class="main-content-card" body-style="padding: 0px">
      <div id="Cai">Cai</div>
      <div id="Bao">Bao</div>
    </el-card>
  </div>
</template>

<script setup>

import { onMounted, reactive } from 'vue'
import Header from '../components/HeadNav.vue'
const data = reactive({
  src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  imgUrl: [
    'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
    'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
  ],
  activeNames: '',
})

/*
onMounted(() => {
  const Cai = document.getElementById('Cai')
  const Bao = document.getElementById('Bao')
  console.log(window.outerHeight)
})*/
</script>

<style scoped lang="scss">
@use "../assets/sass/HomeView/Styles/HomeHead";
@use "../assets/sass/HomeView/Styles/deep";
@use "../assets/sass/HomeView/Styles/Study-card";

@use "../assets/sass/HomeView/Animations/animation-content";
@use "../assets/sass/HomeView/Animations/main-content-card";
</style>

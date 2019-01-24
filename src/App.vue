<template>
  <div id="app">
    <el-header>
     <Header></Header>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Movie from './components/Movie.vue';


export default {
  name: 'App',
  components: {
    Header,
    Movie
  }
}
</script>

<style>
</style>

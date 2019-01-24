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
import Header from './components/Header';
import Home from './components/Home';


export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>

<style>
</style>

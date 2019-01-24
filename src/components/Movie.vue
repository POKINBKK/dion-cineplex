<template>
  <div id="movie-container">
    <el-row :gutter="20">
      <el-col :span="6"><MovieCard title="The Avengers" date="22-01-1999"></MovieCard></el-col>
      <el-col :span="6"><MovieCard title="The Avengers" date="22-01-1999"></MovieCard></el-col>
      <el-col :span="6"><MovieCard title="The Avengers" date="22-01-1999"></MovieCard></el-col>
      <el-col :span="6"><MovieCard title="The Avengers" date="22-01-1999"></MovieCard></el-col>
    </el-row>
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
  name: 'Movie',
  components: [
    MovieCard
  ]
}
</script>

<style>
</style>

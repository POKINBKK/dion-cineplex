<template>
  <div id="movie-container">
    <el-row type="flex" class="movie-row" justify="space-around" :gutter="20">
      <el-col :span="6">
        <MovieCard title="Alita" date="24-01-2019" picpath="../assets/now-showing/movie-1.jpg"></MovieCard>
      </el-col>
      <el-col :span="6">
        <MovieCard title="Alita" date="24-01-2019"></MovieCard>
      </el-col>
      <el-col :span="6">
        <MovieCard title="Alita" date="24-01-2019"></MovieCard>
      </el-col>
      <el-col :span="6">
        <MovieCard title="Alita" date="24-01-2019"></MovieCard>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MovieCard from './MovieCard';

export default {
  name: 'Movie',
  components : {
    MovieCard
  }
}

</script>

<style scoped>

.movie-row {
  padding-left: 10em;
  padding-right: 10em;
}
</style>

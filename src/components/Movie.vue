<template>
  <!--ตัววนfor แสดงหนังทั้งหมดในหน้า home-->
  <div id="movie-container">
    <el-row class="movie-row" justify="space-around" :gutter="20">
      <el-col :span="6" v-for="item1 in movieList.nowShowingList" :key="item1.movieId" class="movie-col">
        <MovieCard v-bind:title="item1.movieTitle" v-bind:date="item1.showDate" v-bind:picpath="item1.movieThumbnails"></MovieCard>
      </el-col>
            <el-col :span="6" v-for="item2 in movieList.comingSoonList" :key="item2.movieId" class="movie-col">
        <MovieCard v-bind:title="item2.movieTitle" v-bind:date="item2.showDate" v-bind:picpath="item2.movieThumbnails"></MovieCard>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MovieCard from './MovieCard';
import json from '../assets/movielist.json'

export default {
  name: 'Movie',
  components : {
    MovieCard
  },
  data (){
    return{
      movieList : json
    }
  }
}

</script>

<style scoped>

.movie-col {
  margin-bottom: 2em;
}
</style>

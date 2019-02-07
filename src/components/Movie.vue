<template>
  <div id="movie-container">
    <el-row class="movie-row" justify="space-around" :gutter="20">
      <el-col :span="6" v-for="item in movieList.nowShowingList" :key="item.movieId" class="movie-col">
        <MovieCard v-bind:title="item.movieTitle" v-bind:date="item.showDate" v-bind:picpath="item.movieThumbnails"></MovieCard>
      </el-col>
            <el-col :span="6" v-for="item in movieList.comingSoonList" :key="item.movieId" class="movie-col">
        <MovieCard v-bind:title="item.movieTitle" v-bind:date="item.showDate" v-bind:picpath="item.movieThumbnails"></MovieCard>
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

<template>
  <div id="comingsoon-container">
    <el-header>
     <Header></Header>
    </el-header>
    <el-main id="comingsoon-main-container">
    <!--title section-->
    <el-row>
      <el-col id="moviesection-title" :span="24">
        <h1>โปรแกรมหน้า</h1>
      </el-col>
    </el-row>
    <!--selector section-->
    <el-row>
      <el-col :span="24" class="movieselector-container">
        <MovieSelector></MovieSelector>
      </el-col>
    </el-row>
    <!--movie section-->
    <el-row class="movie-row" justify="space-around" :gutter="20">
      <el-col :span="6" v-for="item in movieList.comingSoonList" :key="item.movieId" class="movie-col">
        <MovieCard v-bind:title="item.movieTitle" v-bind:date="item.showDate" v-bind:picpath="item.movieThumbnails"></MovieCard>
      </el-col>
    </el-row>
    </el-main>
  </div>
</template>

<script>
import MovieCard from './MovieCard';
import json from '../assets/movielist.json';
import MovieSelector from './MovieSelector';
import Header from './Header';

export default {
  name: 'comingSoon',
  components : {
    MovieCard,
    MovieSelector,
    Header
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

#comingsoon-main-container {
  padding-left: 10em;
  padding-right: 10em;
}

.movieselector-container {
  padding-top: 1em;
  padding-left: 10em;
  padding-right: 10em;
  padding-bottom: 2em;
}

#moviesection-title {
  text-align: center;
  color: #409EFF;
}

</style>


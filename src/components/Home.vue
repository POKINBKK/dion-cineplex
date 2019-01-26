<template>
  <div id="home-container">
    <!--Slideshow section-->
    <el-row id="slideshow-row">
      <el-col :span="24">
        <div class="slideshow-container">
          <el-carousel height="450px" indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <img src="../assets/banner/banner-1.jpg" width="100%"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
    <!--MovieSelector Section-->
    <el-row>
      <el-col class="movieselector-container" :span="24">
        <MovieSelector></MovieSelector>
      </el-col>
    </el-row>
    <!--all movie for select section-->
    <el-row>
      <el-col id="moviesection-title" :span="24">
        <h1>ภาพยนตร์</h1>
      </el-col>
    </el-row>
    <el-row id="movie-row">
      <el-col :span="24">
        <Movie></Movie>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Movie from './Movie';
import MovieSelector from './MovieSelector';
export default {
  name: 'Home',
  components: {
    Movie,
    MovieSelector
  }
}
</script>

<style scoped>
  .el-carousel__item {
    background-color: #99a9bf;
    text-align: center;
  }
  #home-container{
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
    padding-bottom: 1em;
  }

</style>

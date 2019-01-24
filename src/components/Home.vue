<template>
  <div id="main-container">
    <!--Slideshow section-->
    <el-row id="slideshow-row">
      <el-col :span="24">
        <div class="slideshow-container">
          <el-carousel height="500px" indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
    <!--all movie for select section-->
    <el-row id="movie-row">
      <el-col :span="24">
        <Movie></Movie>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Movie from './Movie';
export default {
  name: 'Home',
  components: {
    Movie
  }
}
</script>

<style scoped>
  .el-carousel__item {
    background-color: #99a9bf;
    text-align: center;
  }
</style>

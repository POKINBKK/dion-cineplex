<template>
  <div id="moviecard-container">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img src="../assets/now-showing/nowshowing-1.jpg" class="image">
      <div class="information-container">
        <p class="show-date">วันที่เข้าฉาย: {{ date }}</p>
        <p class="movie-title">{{ title }}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['title', 'picpath', 'date']
}
</script>

<style scoped>

.image {
  width: 100%;
}

.information-container {
  margin-top: -10px;
  text-align: center;
}

.show-date {
  color: #409EFF;
  font-size: 14px;
}

.movie-title {
  font-size: 24px;
  margin-top: -10px;
}
</style>

<template>
  <div id="moviecard-container">
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/movie-1.jpg" class="image">
      <div style="padding: 14px;">
        <span>{{ title }}</span>
        <div class="bottom clearfix">
          <time class="time">{{ date }}</time>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['title', 'pic', 'date']
}
</script>

<style>
</style>

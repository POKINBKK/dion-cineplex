<template>
  <!--การ์ดที่มีหนังมีชื่อหนังวันที่เข้าอ่ะ-->
  <div id="moviecard-container" @click="movieSelect">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img v-bind:src="picpath" class="image">
      <div class="information-container">
        <p class="show-date">วันที่เข้าฉาย: {{ date }}</p>
        <p class="movie-title">{{ title }}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
import json from '../assets/movielist.json';

export default {
  name: 'MovieCard',
  props: ['title', 'picpath', 'date'],
  data(){
    return {
      nowshowing: json.nowShowingList,
      comingsoon: json.comingSoonList
    }
  },
  methods: {
    movieSelect(){
      console.log("click");
      for(let i = 0; i < this.nowshowing.length; i++){
        if(this.nowshowing[i].movieTitle == this.title){
          this.$router.push({name: 'NowShowingDetail',params :{id: this.nowshowing[i].movieId}});
        }
      }
      for(let i = 0; i < this.comingsoon.length; i++){
        if(this.comingsoon[i].movieTitle == this.title){
          this.$router.push({name: 'ComingSoonDetail',params :{id: this.comingsoon[i].movieId}});
        }
      }
    }
  }
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
  font-size: 16px;
  margin-top: -10px;
}
</style>

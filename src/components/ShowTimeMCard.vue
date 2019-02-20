<template>
  <!--จำแนกหนังตามโรงใหญ่เดียวกัน-->
  <div id="showtimemcard-container">
  <el-card>
    <el-row :gutter="12">
      <el-col :span="4">
        โรงภาพยนตร์ที่ {{ theaterId.theaterId }}
      </el-col>
      <el-col :span="4">
        <div v-for="item1 in movieData" :key="item1.movieId">
          <div v-if="item1.movieId==theaterId.screeningId" >
          <img v-bind:src="item1.movieThumbnails" width="100%">
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-col>
          <div v-for="item2 in movieData" :key="item2.movieId">
            <div v-if="item2.movieId==theaterId.screeningId" >
            <h2>{{item2.movieTitle}}</h2>
            <p><span>ประเภท: {{item2.genre}}</span> | <span>ความยาว: {{item2.movieLength}} นาที</span></p>
            </div>
        </div>
          </el-col>
        </el-row>
        <br>
        <el-row>
          <el-col :span="3" v-for="item3 in theaterId.showTime" :key="item3.showTimeId">
              <el-button @click="roundSelect(item3.showTimeId)">{{item3.showTime}}</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    </el-card>
  </div>
</template>

<script>
import theaterInfo from '../assets/theater.json'
import movieInfo from '../assets/movielist.json'

export default {
  name: 'ShowTimeMCard',
  props : ['theaterId'],
  data (){
    return{
      cinemaInfo: theaterInfo.cineplexList,
      movieData: movieInfo.nowShowingList
    }
  },
  methods: {
    roundSelect(id){
      if(JSON.parse(window.localStorage.loginstate)  == true){
        this.$router.push({name: 'SelectSeat',params :{id: id}})
      } else {
          this.$notify({
          title: 'กรุณาเข้าสู่ระบบ',
          message: 'ท่านจำเป็นต้องเข้าสู่ระบบจึงจะเลือกที่นั่งได้',
          type: 'warning',
          position: 'top-left'
        });
      }
    }
  }
}

</script>

<style scoped>

#theater-main-container {
  padding-left: 10em;
  padding-right: 10em;
}
</style>
